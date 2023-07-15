'use client'

import { useRouter } from "next/navigation";
import { CSSProperties } from "react";

type IProps = {
    post: {
        slug: string,
        frontmatter: {
            [key: string]: any;
        },
        content: string
    }
}

export default function PostCard(props: IProps) {
    const router = useRouter()

    function onClick() {
        router.push('blog/' + props.post.slug)
    }

    return (
        <div style={style} onClick={() => onClick()}>
            <div>
                <h3>{props.post.frontmatter.title}</h3>
                <h4>{props.post.frontmatter.date}</h4>
                <p>{props.post.frontmatter.tagline}</p>
            </div>
        </div>
    )
}

const style: CSSProperties = {
    textAlign: 'left',
    padding: '8px',
    margin: '4px',
    borderRadius: '4px',
    border: '1px solid black',
    backgroundColor: '#363d49',
    cursor: 'pointer'
}