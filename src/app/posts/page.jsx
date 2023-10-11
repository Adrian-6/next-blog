import React from 'react'
import { getPostsMeta, getPostByName } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import { Suspense } from "react"
import PostsList from './PostsList'
export default async function page() {

    const posts = await getPostsMeta()

    let xd = async () => {
        const postsArr = []
        for (const post of posts) {
            const res = await getPostByName(`${post.meta.id}.mdx`)
            //let stringContent = postContent.content.toString();
            postsArr.push(res)
        }
        return postsArr
    }
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <PostsList promise={xd} />
            </Suspense>

        </>
    )
}
