import FrontPage from '../FrontPage'
import { postsPerPage } from '../../../../lib/postsPerPage'
import { getPostsMeta } from '../../../../lib/posts'

export async function generateMetadata(
    { params },
) {
    const pageNum = params.pageNum
    return {
        title: `Blog posts page ${pageNum}`,
        description: `Blog posts page ${pageNum}`
    }
}

export default async function page({ params: { pageNum } }) {
    const currentPage = pageNum || 0
    return <FrontPage currentPage={currentPage} postsPerPage={postsPerPage} />
}

export async function generateStaticParams() {
    const posts = await getPostsMeta()
    const pagesArr = []

    const pages = posts.length / postsPerPage

    for (let i = 1; i <= pages; i++) {
        pagesArr.push(String(i))
    }

    return pagesArr.map((page) => (
        { pageNum: page }
    ))
}