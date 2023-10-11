import React from 'react'
import { getPostsMeta, getPostByName } from '../../../../lib/posts'
import { notFound } from 'next/navigation'
import { Suspense } from "react"
import PostsList from '../../posts/PostsList'

export default async function page({ params: {tag} }) {
  const posts = await getPostsMeta()
  let xd = async () => {
    const postsArr = []
    for (const post of posts) {
      const res = await getPostByName(`${post.meta.id}.mdx`)
      //let stringContent = postContent.content.toString();
      if (res.meta.tags.indexOf(tag) !== -1) {
        postsArr.push(res)
      }
    }
    return postsArr
  }
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <h1 className='text-xl'>posts about: {tag}</h1>
        <PostsList promise={xd} />
      </Suspense>
    </>
  )
}

export async function generateStaticParams() {
  const posts = await getPostsMeta()
  const postTagsArr = []
  for (const post of posts) {
    const res = await getPostByName(`${post.meta.id}.mdx`)
    //let stringContent = postContent.content.toString();
    postTagsArr.push(res.meta.tags.filter(tag => postTagsArr.indexOf(tag) === -1))
  }

  const tagsArr = Array.from(new Set(postTagsArr.flat()))
  return tagsArr.map((tag) => (
    { targetTag: tag }
  ))
}