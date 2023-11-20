import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Suspense } from "react"
import { getPostByName, getPostsMeta } from '../../lib/posts'
import PopularTags from './components/PopularTags'

const DynamicCarousel = dynamic(
  () => import('./posts/PostsCarousel'),
  { ssr: false }
)

const getLatestPosts = async () => {
  const res = await getPostsMeta()
  if (res.length === 0) notFound()

  const postsArr = []
  const posts = res.slice(0, 7) // gives 7 most recent posts
  for (const post of posts) {
    const res = await getPostByName(`${post.meta.id}.mdx`)
    postsArr.push(res)
  }
  return postsArr
}

const latestPosts = await getLatestPosts()

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center w-full">
      <div className='bg-zinc-100 full__background py-16'>
        <h1 className='text-3xl text-center'>
          Blog
        </h1>
        <p className='whitespace-nowrap text-center mt-6 text-xl'>
          Latest news <span className='font-bold'>for developers</span>
        </p>
      </div>
      <div>
        <div className='bg-black mt-20 p-2'>
          <h2 className='text-white text-xl text-center' >
            Newest posts
          </h2>
        </div>
        <Suspense>
          <DynamicCarousel posts={latestPosts} />
        </Suspense>
        <div className='flex mt-6'>
          <Link href="/posts" className='text-xl border border-black px-4 py-2 mx-auto header__item'>
            See More Posts
          </Link>
        </div>
      </div>
      <div className='z-10 w-full mt-12 border-top-full py-4'>
        <h2 className='text-center text-xl'>
          Popular Tags
        </h2>
        <ul className='w-screen max-w-screen-2lg px-2 xl:px-0'>
          <PopularTags tagsNum={5} />
        </ul>
        <div className='flex '>
          <Link href="/tags" className='text-xl border border-black header__item px-4 py-2 mx-auto'>
            See all Tags
          </Link>
        </div>
      </div>
    </div>
  )
}
