import { Fragment } from "react"
import { ProgressSpinner } from "primereact/progressspinner"

const PostView=({loadingPost, dataPost}) => {
    return (
        <Fragment>
            {loadingPost ? <ProgressSpinner/> : dataPost.map((post) => (
                <div key={post.id}>
                    <h2>Titulo: {post.title}</h2>
                    <h5>Cuerpo: {post.body}</h5>
                </div>
            )) }
        </Fragment>
    )
}

export default PostView