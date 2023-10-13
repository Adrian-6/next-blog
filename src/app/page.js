import Link from 'next/link'
import FrontPage from '../app/posts/FrontPage'
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Link href="/posts" className='text-3xl'>posts</Link>
      <p className='text-3xl text-center'>hello🦅&nbsp;</p>
      <span className='whitespace-nowrap'>
        I'm <span className='font-bold'>retarded</span>
      </span>
      <div>
      <div>
        <h2 >
          Newest posts
        </h2>
      </div>
      <FrontPage currentPage={1} postsPerPage={3} noPagination={true}/>
      </div>
      <div>
        slider z tagami
      </div>
    </div>
  )
}
