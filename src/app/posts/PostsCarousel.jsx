'use client'
import { Suspense, useCallback, useEffect, useRef, useState } from "react"
import Post from "./Post"
import styles from './styles.module.css'

export default function PostsCarousel({ posts }) {

    if (!posts || posts.length === 0) notFound()

    const carouselRef = useRef()
    const [hover, setHover] = useState(false)
    const [carouselEnd, setCarouselEnd] = useState(false)

    const intObserver = useRef()

    const lastPostRef = useCallback(post => {
        if (intObserver.current) intObserver.current.disconnect()
        intObserver.current = new IntersectionObserver(item => {
            if (item[0].isIntersecting) {
                setCarouselEnd(true)
            } else {
                setCarouselEnd(false)
            }
        }, {
            threshold: 1.0
        })
        if (post) intObserver.current.observe(post)
    }, [])

    useEffect(() => {
        carouselRef.current.onpointerenter = () => {
            setHover(true)
        }
        carouselRef.current.onscroll = () => {
            setHover(true)
        }
        carouselRef.current.onpointerleave = () => {
            setHover(false)
        }
        carouselRef.current.onscrollend = () => {
            setHover(false)
        }
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!hover) {
                let left = carouselEnd ? -9999 : 336
                carouselRef.current.scrollBy({ top: 0, left, behavior: 'smooth' })
                setCarouselEnd(false)
            }
        }, 1111)
        return () => clearInterval(interval);
    }, [hover, carouselEnd])

    return (
        <div className='max-w-screen-2lg left-0 pb-2 border-b-2 border-black md:border-2 select-none'>
            <div className={`flex w-screen lg:w-full pr-2 overflow-x-scroll ${styles.scrollbar}`} ref={carouselRef}>
                <Suspense>
                    {posts.map((post, id) => {
                        const { date, title, intro, image, tags, id: postId } = post.meta
                        if (posts.length === id + 1) {
                            return (
                                <div ref={lastPostRef} key={id} id={id}>
                                    <Post date={date} title={title} intro={intro} tags={tags} postId={postId} image={image} />
                                </div>
                            )
                        }
                        return (
                            <div key={id} id={id}>
                                <Post date={date} title={title} intro={intro} tags={tags} postId={postId} image={image} />
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </div>
    )
}