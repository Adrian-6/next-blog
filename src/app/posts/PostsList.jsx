import { notFound } from 'next/navigation'
import Post from './Post'

export default async function PostsList({ promise }) {

    const posts = await promise()
    if (!posts || posts.length === 0) notFound()
    const content = (
        <div className="container mx-auto">
            <div className="flex  justify-evenly flex-wrap mb-8">
                {
                    posts.map((post, id) => {
                        const { date, title, intro, image, tags, id: postId } = post.meta
                        return <Post date={date} title={title} intro={intro} tags={tags} key={id} postId={postId} image={image} />
                    })
                }
            </div>
        </div>
    )
    return content
}