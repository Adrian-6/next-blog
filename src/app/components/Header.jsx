import React from 'react'
import Link from 'next/link'
export default function Header() {

    const linksArr = [{ url: "/", text: "Home" }, { url: "/posts", text: "Posts" }, { url: "/tags", text: "Tags" }]

    const Links = linksArr.map((item, id) => (<Link href={item.url} key={id} className='chuj border border-black px-4'>{item.text}</Link>))

    return (
        <header className='bg-white h-16 flex justify-center'>
            <nav className='flex gap-4 text-lg items-center h-full max-w-screen-xl w-full'>
                {Links}
            </nav>
        </header>
    )
}
