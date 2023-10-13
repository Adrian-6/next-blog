import React, { Suspense } from 'react'
import Link from 'next/link'
import { tagsArr } from '../../../lib/tagsArr'

export default async function page() {

  const tagsList = tagsArr.map((tag, id) => (<Link href={`/tags/${tag}`} key={id} className='px-4 py-2 bg-black text-white hover:text-primary-color'>{tag}</Link>))

  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <div className='flex flex-wrap gap-6'>
          {tagsList}
        </div>
      </Suspense>
    </>
  )
}
