import FrontPage from '../FrontPage'
import { postsPerPage } from '../../../../lib/postsPerPage'

export default async function page({ params: { pageNum } }) {

    const currentPage = pageNum || 0
    return <FrontPage currentPage={currentPage} postsPerPage={postsPerPage} />
}