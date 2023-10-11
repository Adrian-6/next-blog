'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Suspense } from 'react';
export default function Post(props) {

    const links = `http://localhost:3000/posts/${props.postId}`;


    let [popupVisible, setPopupVisible] = useState(false)
    let popupText = 'Copied to clipboard'
    //displays the popup for 3 seconds
    const displayPopup = () => {
        setPopupVisible(true)
        setTimeout(() => {
            setPopupVisible(false)
        }, 2500)
    }

    const copylink = () => {
        navigator.clipboard.writeText(links)
        displayPopup()
    }

    let popupClass = popupVisible ? "fixed" : "hidden"

    return (
        <Suspense fallback={<p>Loading</p>}>
            <div className='post border-solid border border-black w-80 h-100.8 cursor-default'>
                <div className={`${popupClass} bg-pink-500 text-white left-1/2 -translate-x-1/2 bottom-16 z-10`}>{popupText}</div>
                <div className='flex flex-col h-full relative'>
                    <div className='bg-black text-white absolute -top-1.5 -left-1.5 px-2 post__date'>
                        {props.date}
                    </div>
                    <Link href={`/posts/${props.postId}`}>
                        <img src='/kyriakos.jpg' alt="kyriakos grizzly" className='border-b border-black aspect-photo' />
                    </Link>
                    <div className='flex flex-col flex-grow justify-between max-h-52'>
                        <span className='text-white flex gap-2 px-3 mt-4'>
                            {props.tags.map((tag, id) => (
                                <span className="bg-black px-3 py-0.5" key={id}>
                                    <Link href={`/tags/${tag}`}>
                                        {tag}
                                    </Link>
                                </span>
                            ))}
                        </span>
                        <span>
                            <h2 className='px-3 text-2xl font-bold peer-'>
                                <Link href={`/posts/${props.postId}`}>
                                    {props.title}
                                </Link>
                            </h2>
                        </span>
                        <div className='max-h-24 text-ellipsis break-words overflow-hidden line-clamp-2 px-3 mb-2'>
                            <p className='max-w-full text-gray-700'>
                                {props.intro}
                            </p>
                        </div>
                        <div className='border-t border-black h-14 flex-shrink-0'>
                            <div className='flex justify-between h-full'>
                                <span className='flex justify-between flex-grow my-auto px-3 post-footer'>
                                    <h2 className='font-bold'>
                                        <Link href={`/posts/${props.postId}`}>
                                            View more
                                        </Link>
                                    </h2>
                                    <span>
                                        <Link href={`/posts/${props.postId}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" /></svg>
                                        </Link>
                                    </span>
                                </span>
                                <div className='border-l w-14 border-black flex'>
                                    <span className='m-auto cursor-pointer hover:fill-primary-color' onClick={copylink} title="Copy link to clipboard">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M720-80q-50 0-85-35t-35-85q0-7 1-14.5t3-13.5L322-392q-17 15-38 23.5t-44 8.5q-50 0-85-35t-35-85q0-50 35-85t85-35q23 0 44 8.5t38 23.5l282-164q-2-6-3-13.5t-1-14.5q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35q-23 0-44-8.5T638-672L356-508q2 6 3 13.5t1 14.5q0 7-1 14.5t-3 13.5l282 164q17-15 38-23.5t44-8.5q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-640q17 0 28.5-11.5T760-760q0-17-11.5-28.5T720-800q-17 0-28.5 11.5T680-760q0 17 11.5 28.5T720-720ZM240-440q17 0 28.5-11.5T280-480q0-17-11.5-28.5T240-520q-17 0-28.5 11.5T200-480q0 17 11.5 28.5T240-440Zm480 280q17 0 28.5-11.5T760-200q0-17-11.5-28.5T720-240q-17 0-28.5 11.5T680-200q0 17 11.5 28.5T720-160Zm0-600ZM240-480Zm480 280Z" /></svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    )
}
