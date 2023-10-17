import { notFound } from "next/navigation";
import { getPostsMeta, getPostByName } from "../../../../lib/posts";
import Posts from "../../components/Posts";
import React from 'react'
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";

export const revalidate = 0

export async function generateMetadata({ params: { postId } }) {
    const post = await getPostByName(`${postId}.mdx`)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.meta.title
    }
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
        <Suspense fallback={<p>Loading</p>}>
            <div className='post__full border border-black max-w-screen-xl my-12 bg-white'>
                <div className='flex flex-col h-full relative'>
                    <Image height="677" width="1100" src={image} alt="image" className='border-b border-black aspect-photo' />
                    <div className='flex flex-col flex-grow justify-between'>
                        <span className='text-white px-4 my-3.5 flex justify-between'>
                            <span className="flex gap-2">
                                {tagsList}
                            </span>
                            <div className='bg-black text-white px-3 py-0.5'>
                                {date}
                            </div>
                        </span>
                        <span className="border-t border-black">
                            <h2 className='mx-4 text-3xl font-bold py-4 text-center border-x border-b border-black'>
                                {title}
                            </h2>
                        </span>
                        <div className='text-ellipsis break-words overflow-hidden px-4 my-8'>
                            <article className="first-letter:text-5xl ffirst-letter:ont-bold first-letter:text-orange-400 first-letter:float-left">
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
