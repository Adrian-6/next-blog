import Link from 'next/link'
import FrontPage from '../app/posts/FrontPage'
import { Suspense } from "react"
import TagsSlider from './components/TagsSlider'
import PostsCarousel from './posts/PostsCarousel'
import dynamic from 'next/dynamic'
import { getPostsMeta, getPostByName } from '../../lib/posts'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./posts/PostsCarousel'),
  { ssr: false }
)

const res = await getPostsMeta()
if (res.length === 0) notFound()

const postsArr = []
const posts = res.slice(0, 7)
for (const post of posts) {
  const res = await getPostByName(`${post.meta.id}.mdx`)
  postsArr.push(res)
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full">
      <div className='h-56 bg-white w-full'>
        <p className='text-3xl text-center'>
          hello🦅&nbsp;
        </p>
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>retarded</span>
        </span>
      </div>
      <div>
        <div className='bg-black mt-10 p-2'>
          <h2 className='text-white text-xl text-center' >
            Newest posts
          </h2>
        </div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <DynamicComponentWithNoSSR posts={postsArr} />
        </Suspense>
        {/* <FrontPage currentPage={1} postsPerPage={3} noPagination={true} /> */}
      </div>
      <div className='slider__background z-10 '>
        <ul className='max-w-screen-2lg'>
          <TagsSlider tagsNum={5} />
        </ul>
      </div>
    </div>
  )
}
