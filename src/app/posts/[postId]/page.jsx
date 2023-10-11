import { notFound } from "next/navigation";
import { getPostsMeta, getPostByName } from "../../../../lib/posts";
import Posts from "../../components/Posts";
import React from 'react'
import Link from "next/link";
import { Suspense } from "react";

export const revalidate = 0

/* export async function generateStaticParams() {
    const posts = await getPostsMeta()

    if (!posts) return []

    return posts.map(post => ({
        postId: post.id
    }))
} */

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
    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`} className="bg-black px-3 py-0.5 hover:text-primary-color">{tag}</Link>
    ))

    return (
        <Suspense fallback={<p>Loading</p>}>
            <main className="min-h-screen max-w-screen flex">
                <div className='post__full border-solid border border-black max-w-screen-lg mx-auto my-12 bg-white'>
                    <div className='flex flex-col h-full relative'>
                        <img src='/kyriakos.jpg' alt="kyriakos grizzly" className='border-b border-black aspect-photo' />
                        <div className='flex flex-col flex-grow justify-between'>
                            <span className='text-white px-4 my-3.5 flex justify-between'>
                                <span className="flex gap-2">
                                    {tags}
                                </span>
                                <div className='bg-black text-white px-3 py-0.5'>
                                    {meta.date}
                                </div>
                            </span>
                            <span className="border-t border-black">
                                <h2 className='mx-4 text-3xl font-bold py-4 text-center border-x border-b border-black'>
                                    {meta.title}
                                </h2>
                            </span>
                            <div className='text-ellipsis break-words overflow-hidden px-4 my-8'>
                                <article className="first-letter:text-5xl ffirst-letter:ont-bold first-letter:text-orange-400 first-letter:float-left">
                                    {content}
                                </article>
                            </div>
                            <div className='border-t border-black h-14 flex-shrink-0'>
                                <div className='flex justify-end h-full'>
                                    {/*                                     <div className='w-full border-black flex'>
                    
                                    </div> */}
                                    <div className="border-x border-black flex mr-4">
                                        <p className="my-auto px-4">
                                            Kyriakos Grizzly 2023
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Suspense>
    )
}
