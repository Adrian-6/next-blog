import FrontPage from './FrontPage'
import { postsPerPage } from '../../../lib/postsPerPage'

export const metadata = {
    title: 'Blog posts',
    description: 'Blog posts page 1',
}

export default async function page() {
    const currentPage = 1
    return (
        <FrontPage currentPage={currentPage} postsPerPage={postsPerPage} />
    )
}