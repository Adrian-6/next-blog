import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { getPostByName, getPostsMeta } from "../../../../lib/posts";

export async function generateMetadata({ params: { postId } }) {
    const post = await getPostByName(`${postId}.mdx`)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: `${post.meta.title}\xa0|\xa0Blog` // \xa0 == &nbsp;
    }
}

export async function generateStaticParams() {
    const postIds = []
    const posts = await getPostsMeta()
    for (const post of posts) {
        const res = await getPostByName(`${post.meta.id}.mdx`)
        postIds.push(res.meta.id)
    }

    return postIds.map((id) => (
        { postId: id }
    ))
}

export default async function Post({ params: { postId } }) {
    const post = await getPostByName(`${postId}.mdx`)
    if (!post) notFound()

    const { meta, content } = post
    const { tags, image, author, date, title } = meta

    const tagsList = tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`} className="bg-black px-3 py-0.5 hover:text-primary-color">{tag}</Link>
    ))

    return (
        <Suspense>
            <div className='post__full border border-black max-w-screen-xl my-12 bg-white mx-2 xl:mx-0'>
                <div className='flex flex-col h-full relative'>
                    <Image height="677" width="1100" src={image} alt="image" className='border-b border-black aspect-photo' />
                    <div className='flex flex-col flex-grow justify-between'>
                        <span className='text-white px-4 my-3.5 flex justify-between flex-col-reverse sm:flex-row'>
                            <span className="flex gap-2 flex-wrap">
                                {tagsList}
                            </span>
                            <span className='bg-black text-white px-3 py-0.5 w-fit mb-2 sm:mb-0'>
                                {date}
                            </span>
                        </span>
                        <span className="border-t border-black">
                            <h2 className='mx-4 text-3xl font-bold py-4 text-center border-x border-b border-black'>
                                {title}
                            </h2>
                        </span>
                        <div className='text-ellipsis break-words overflow-hidden px-4 my-8'>
                            <article className="first-letter:text-5xl first-letter:text-primary-color first-letter:float-left">
                                {content}
                            </article>
                        </div>
                        <div className='border-t border-black h-14 flex-shrink-0'>
                            <div className='flex justify-end h-full'>
                                <div className="border-x border-black flex mr-4">
                                    <p className="my-auto px-4">
                                        {author}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
