import React from 'react'
import { getPostsMeta, getPostByName } from '../../../../lib/posts'
import { Suspense } from "react"
import PostsList from '../PostsList'

export default async function page({ params: { pageNum } }) {

    const res = await getPostsMeta(pageNum)
    const pageSize = 2;
    const currentPage = pageNum || 0

    let postsPromise = async () => {
        const postsArr = []
        const posts = res.slice(currentPage * pageSize, currentPage * pageSize + pageSize)
        for (const post of posts) {
            const res = await getPostByName(`${post.meta.id}.mdx`)
            postsArr.push(res)
        }
        return postsArr
    }
    return (
        <>
            <Suspense fallback={<h2>Loading...</h2>}>
                <PostsList promise={postsPromise} />
            </Suspense>
        </>
    )
}