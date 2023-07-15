import matter from "gray-matter"
import path from "path"
import fs from "fs"
import BackButton from "@/components/BackButton"
import PostCard from "@/components/PostCard"
import { CSSProperties } from "react"

type IProps = {
    params: {
        slug: string
    }
}

export default function Page({ params }: IProps) {
    const posts = getPosts()
    return (
        <div>
            <BackButton to="/home">Home</BackButton>
            <div className="grid" style={style}>
                {posts.map((post) => {
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

function getPosts() {
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


