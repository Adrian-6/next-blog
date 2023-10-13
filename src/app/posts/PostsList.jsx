import { notFound } from 'next/navigation'
import Post from './Post'

export default async function PostsList({ promise }) {

    const posts = await promise()
    if (!posts || posts.length === 0) notFound()
    const content = (
        <div className="container mx-auto pt-10">
            <div className="flex gap-16 justify-center flex-wrap mb-10">
                {
                    posts.map((post, id) => {
                        const { date, title, intro, tags, id: postId } = post.meta
                        return <Post date={date} title={title} intro={intro} tags={tags} key={id} postId={postId} />
                    })
                }
            </div>
        </div>
    )
    return content
}