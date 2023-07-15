import matter from "gray-matter"
import path from "path"
import fs from "fs"
import BackButton from "@/components/BackButton"
import PostCard from "@/components/PostCard"
import { CSSProperties } from "react"

export default function Page() {
    const posts = getPosts()
    return (
        <div>
            <BackButton to="/home">Home</BackButton>
            <div className="grid" style={style}>
                {posts.sort(comparePost).reverse().map((post) => {
                    return (
                        <PostCard post={post} />
                    )
                })}
            </div>
        </div>
    )
}

const style: CSSProperties = {
    marginTop: '8px'
}

// private

function getPosts(): PostType[] {
    // get all posts from posts directory
    const postsDirectory = path.join(process.cwd(), 'posts')
    const posts = fs.readdirSync(postsDirectory, { withFileTypes: true }).filter(value => value.name.endsWith(".md"))

    return posts.map(({ name }) => {
        const slug = name
            .replace(/^.*[\\\/]/, "")
            .split(".")
            .slice(0, -1)
            .join(".")

        const fileContents = fs.readFileSync(path.join(postsDirectory, name), 'utf8')
        const document = matter(fileContents)
        return {
            slug,
            frontmatter: document.data,
            content: document.content
        }
    })
}

function comparePost(a: PostType, b: PostType): number {
    if(a === b) return 0
    const aDate = new Date(a.frontmatter.date)
    const bDate = new Date(b.frontmatter.date)
    return aDate > bDate ? 1 : -1
}

type PostType = {
    slug: string,
    frontmatter: {
        [key: string]: any
    },
    content: string
}


