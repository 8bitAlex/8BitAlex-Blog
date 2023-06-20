import React from "react"
import withHooks from "../components/withHooks";

const posts = [
    { title: 'Sample', file: 'test.md' }
]

class BlogPage extends React.Component {

    constructor() {
        super()
        this.state = {
            post: null
        }
    }

    render() {
        return (
            <div>
                {posts.map(({title, url}) => {
                    return (
                    <div>
                        <p>{title}</p>
                        {require('../../public/content/blog/'+{url})}
                    </div>
                    )
                })}
            </div>
        );
    }

}

export default withHooks(BlogPage)