import React, { Suspense } from 'react'
import { getPostByName, getPostsMeta } from '../../../../lib/posts'
import PostsList from '../../posts/PostsList'

export async function generateMetadata(
  { params },
) {
  const tag = params.tag
  return {
    title: `${tag}\xa0|\xa0Blog`,
    description: `Blog posts about: ${tag}`
  }
}

export default async function page({ params: { tag } }) {
  const posts = await getPostsMeta()
  let getPosts = async () => {
    const postsArr = []
    for (const post of posts) {
      const res = await getPostByName(`${post.meta.id}.mdx`)
      if (res.meta.tags.indexOf(tag) !== -1) {
        postsArr.push(res)
      }
    }
    return postsArr
  }

  return (
    <>
      <Suspense>
        <div className='bg-zinc-100 full__background py-8 mb-10'>
          <p className='whitespace-nowrap text-center text-xl'>
            Posts about: <span className='font-bold text-primary-color'>{tag}</span>
          </p>
        </div>
        <PostsList promise={getPosts} />
      </Suspense>
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getPostsMeta()
  const postTagsArr = []
  for (const post of posts) {
    const res = await getPostByName(`${post.meta.id}.mdx`)
    postTagsArr.push(res.meta.tags.filter(tag => postTagsArr.indexOf(tag) === -1))
  }

  const tagsArr = Array.from(new Set(postTagsArr.flat()))
  return tagsArr.map((tag) => (
    { targetTag: tag }
  ))
}