'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

export default function Header() {

    const fullPath = usePathname()
    const [path, setPath] = useState('')
    useEffect(() => {
        setPath(fullPath)
    }, [fullPath])

    const linksArr = [{ url: "/", text: "Home" }, { url: "/posts", text: "Posts" }, { url: "/tags", text: "Tags" }]

    const Links = linksArr.map((item, id) => {
        return (path === item.url || path.includes(item.url) && item.url !== '/') ?
            (<Link href={item.url} key={id} className='header__item border border-primary-color px-4 text-primary-color'>{item.text}</Link>)
            : (<Link href={item.url} key={id} className='header__item border border-black px-4'>{item.text}</Link>)
    })
    return (
        <header className={`bg-white py-2 flex justify-center fixed w-screen z-20 border-b ${styles.shadow}`}>
            <nav className='flex gap-4 text-lg items-center h-full max-w-screen-2lg w-full px-4'>
                {Links}
            </nav>
        </header>
    )
}
