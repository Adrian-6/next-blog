import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Link href="/posts" className='text-3xl'>posts</Link>
        <p className='text-3xl text-center'>hello🦅&nbsp;</p>
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>retarded</span>
        </span>
        <div className='post border-solid border border-black w-80 h-100.8 cursor-default'>
          <div className='flex flex-col h-full relative'>
            <div className='bg-black text-white absolute -top-1.5 -left-1.5 px-2 post__date'>
              2023-10-09
            </div>
            <img src='/kyriakos.jpg' alt="kyriakos grizzly" className='border-b border-black aspect-photo' />
            <div className='flex flex-col flex-grow justify-between'>
              <span className='text-white flex gap-2 px-3 mt-4'>
                <span className="bg-black px-3 py-0.5">
                  <Link href="/">
                    1234566
                  </Link>
                </span>
                <span className="bg-black px-3 py-0.5">
                  <Link href="/">
                    dupa
                  </Link>
                </span>
              </span>
              <span>
                <h2 className='px-3 text-2xl font-bold'>
                  <Link href="/">
                    React v18.0
                  </Link>
                </h2>
              </span>
              <div className='max-h-24 text-ellipsis break-words overflow-hidden line-clamp-2 px-3 mb-2'>
                <p className='max-w-full'>
                  Contrary to podsdsdsdslar belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero
                </p>
              </div>
              <div className='border-t border-black h-14'>
                <div className='flex justify-between h-full'>
                  <span className='flex justify-between flex-grow my-auto px-3 post-footer'>
                    <h2 className='font-bold'>
                      <Link href="/">
                        View more
                      </Link>
                    </h2>
                    <span>
                      <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg>
                      </Link>
                    </span>
                  </span>
                  <div className='border-l w-14 border-black flex'>
                    <span className='m-auto'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
