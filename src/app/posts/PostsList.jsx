import { notFound } from 'next/navigation'
import Post from './Post'

export default async function PostsList({ promise }) {
    
    const posts = await promise()
    if (posts.length === 0) notFound()
    const content = (
        <main className="min-h-screen">
            <div className="container mx-auto pt-10 ">
                <div className="flex gap-16 justify-center flex-wrap">
                    {
                        posts.map((post, id) => {
                            const { date, title, intro, tags, id: postId } = post.meta
                            return <Post date={date} title={title} intro={intro} tags={tags} key={id} postId={postId} />
                        })
                    }
                </div>
            </div>
        </main>
    )
    return content

}