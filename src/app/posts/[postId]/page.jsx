import { notFound } from "next/navigation";
import { getPostsMeta, getPostByName } from "../../../../lib/posts";
import Posts from "../../components/Posts";
import React from 'react'
import Link from "next/link";

export const revalidate = 0

/* export async function generateStaticParams() {
    const posts = await getPostsMeta()

    if (!posts) return []

    return posts.map(post => ({
        postId: post.id
    }))
} */

export async function generateMetadata({ params: { postId } }) {
    const post = await getPostByName(`${postId}.mdx`)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }
    return {
        title: post.meta.title
    }
}


export default async function Post({ params: { postId } }) {
    const post = await getPostByName(`${postId}.mdx`)

    if (!post) notFound()

    const { meta, content } = post
    const tags = meta.tags.map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

    return (
        <>
            <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
            <p className="mt-0 text-sm">
                {meta.date}
            </p>
            <article>
                {content}
            </article>
            <section>
                <h3>Related:</h3>
                <div className="flex flex-row gap-4">
                    {tags}
                </div>
            </section>
            <p className="mb-10">
                <Link href="/">← Back to home</Link>
            </p>
        </>
    )
}
