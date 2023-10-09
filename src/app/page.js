import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../public/arrow.svg'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <p className='text-3xl text-center'>hello🦅&nbsp;</p>
      <span className='whitespace-nowrap'>
        I'm <span className='font-bold'>retarded</span>
      </span>
      <div className='post border-solid border border-black w-80 h-100.8'>
        <div className='flex flex-col h-full'>
          <img src='/kyriakos.jpg' alt="kyriakos grizzly" className='border-b border-black aspect-photo' />
          <div className='flex flex-col flex-grow justify-between'>
            <span className='text-white flex gap-2 px-3 mt-4'>
              <span className="bg-black px-3 py-0.5">
                <Link href="/">
                  huj
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
                      <Image src={arrow} alt="link" />
                    </Link>
                  </span>
                </span>
                <div className='border-l w-14 border-black flex'>
                  <span className='m-auto'>
                    <img src="/share.svg" alt="share" />
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
