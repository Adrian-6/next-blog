import { notFound } from 'next/navigation'
import { Suspense } from "react"
import { getPostByName, getPostsMeta } from '../../../lib/posts'
import PagesList from './PagesList'
import PostsList from './PostsList'

export default async function FrontPage({ currentPage, postsPerPage, noPagination }) {

    const res = await getPostsMeta()
    if (res.length === 0) notFound()
    const pagesNum = Math.ceil(res.length / postsPerPage)
    currentPage = Number(currentPage)
    let postsPromise = async () => {
        const postsArr = []
        const pageNum = currentPage - 1
        const posts = res.slice(pageNum * postsPerPage, pageNum * postsPerPage + postsPerPage)
        for (const post of posts) {
            const res = await getPostByName(`${post.meta.id}.mdx`)
            if (!res.meta || !res.content) return
            postsArr.push(res)
        }
        return postsArr
    }
    const pagination = noPagination ? null : <PagesList page={currentPage} pages={pagesNum} />

    return (
        <div className='flex flex-col w-full mb-8'>
            <Suspense>
                <PostsList promise={postsPromise} />
                {pagination}
            </Suspense>
        </div>
    )
}