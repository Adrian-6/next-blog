import React from 'react'
import Link from 'next/link'
export default function Header() {

    const linksArr = [{ url: "/", text: "Home" }, { url: "/posts", text: "Posts" }, { url: "/tags", text: "Tags" }]

    const Links = linksArr.map((item, id) => (<Link href={item.url} key={id} className='header__item border border-black px-4'>{item.text}</Link>))

    return (
        <header className='bg-white h-16 flex justify-center fixed w-screen z-20'>
            <nav className='flex gap-4 text-lg items-center h-full max-w-screen-2lg w-full'>
                {Links}
            </nav>
        </header>
    )
}
