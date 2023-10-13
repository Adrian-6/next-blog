import FrontPage from './FrontPage'
import { postsPerPage } from '../../../lib/postsPerPage'

export default async function page() {
    const currentPage = 1
    return (
        <FrontPage currentPage={currentPage} postsPerPage={postsPerPage} />
    )
}