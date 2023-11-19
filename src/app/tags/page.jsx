import React, { Suspense } from 'react'
import PopularTags from '../components/PopularTags'

export const metadata = {
  title: 'Blog Tags List',
  description: 'Blog Tags List',
}

export default async function page() {
  return (
    <>
      <Suspense>
        <div className='bg-zinc-100 full__background py-8 mb-6'>
          <p className='whitespace-nowrap text-center text-xl'>
            Tags
          </p>
        </div>
        <div className='flex flex-wrap gap-6 px-2 xl:px-0'>
          <PopularTags />
        </div>
      </Suspense>
    </>
  )
}
