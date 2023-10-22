import matter from "gray-matter"
import path from "path"
import fs from "fs"
import BackButton from "@/components/BackButton"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import remarkGfm from 'remark-gfm'

type IProps = {
  params: {
    slug: string
  }
}

export default function Page({ params }: IProps) {
  const post = getPost(params.slug)
  const date = new Date(post.frontmatter.date)
  const updated = new Date(post.frontmatter.updated)
  const tags = post.frontmatter.tags.map((tag: string, index: number) => {
    return index == post.frontmatter.tags.length - 1 ? tag : tag + ", "
  })

  return (
    <div style={{ textAlign: 'left' }}>
      <BackButton to={'/blog'}>Back</BackButton>
      <div style={{paddingLeft:'32px', paddingRight:'32px'}}>
        <h2>{post.frontmatter.title}</h2>
        <h3>{post.frontmatter.tagline}</h3>
        <h4>By Alex Salerno | {date.toLocaleDateString()} | Updated: {updated.toLocaleDateString()}</h4>
        <hr /><br />
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content.trim()}</ReactMarkdown>
        <h4>Tags: {tags}</h4>
      </div>
    </div>
  )
}

// statically generate blog posts
export async function generateStaticParams() {
  // get all posts from webpack directory
  const context = require.context("../../../../posts/", true, /\.md$/)
  const keys = context.keys().filter(value => value.startsWith("./"))
  const values = keys.map(context)

  return keys.map((key: string, index: number) => {
    // from https://tina.io/blog/simple-markdown-blog-nextjs/
    // dynamically creating the post slug
    // from file name
    const slug = key
      .replace(/^.*[\\\/]/, "")
      .split(".")
      .slice(0, -1)
      .join(".")

    // getting the .md file value associated
    // with the current file name
    const value: any = values[index]

    // parsing the YAML metadata and markdown body
    // contained in the .md file
    const document = matter(value.default)

    return {
      frontmatter: document.data,
      content: document.content,
      slug,
    }
  })
}

// options

export const dynamicParams = false

// private

function getPost(id: string) {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const document = matter(fileContents)
  return {
    frontmatter: document.data,
    content: document.content
  }
}


