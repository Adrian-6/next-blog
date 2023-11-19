import FrontPage from '../FrontPage'
import { postsPerPage } from '../../../../lib/postsPerPage'

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