import React from 'react'
import { getPostsMeta, getPostByName } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import { Suspense } from "react"
import PostsList from '../posts/PostsList'
export default async function page() {

  const posts = await getPostsMeta()

  const postTagsArr = []
  for (const post of posts) {
    const res = await getPostByName(`${post.meta.id}.mdx`)
    //let stringContent = postContent.content.toString();
    postTagsArr.push(res.meta.tags.filter(tag => postTagsArr.indexOf(tag) === -1))
  }

  const tagsArr = Array.from(new Set(postTagsArr.flat()))

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <p>{JSON.stringify(tagsArr)}</p>
      </Suspense>

    </>
  )
}
