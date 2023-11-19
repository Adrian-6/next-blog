import { compileMDX } from 'next-mdx-remote/rsc'

export async function getPostByName(fileName) {
    const res = await fetch(`https://raw.githubusercontent.com/Adrian-6/blogposts/main/${fileName}`, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        },
        next: { revalidate: 1800 } //revalidate data every 30 minutes
    })
    if (!res.ok) return undefined

    const rawMDX = await res.text()
    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX({
        source: rawMDX, options: {
            parseFrontmatter: true,
        }
    })
    const id = fileName.replace(/\.mdx$/, '')
    const blogPostsObj = { meta: { id, title: frontmatter.title, date: frontmatter.date, tags: frontmatter.tags, intro: frontmatter.intro, image: frontmatter.image, author: frontmatter.author }, content }

    return blogPostsObj
}

export async function getPostsMeta() {
    const res = await fetch('https://api.github.com/repos/Adrian-6/blogposts/git/trees/main?recursive=1', {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28'
        },
        next: { revalidate: 1800 }, //revalidate data every 30 minutes
    })

    if (!res.ok) return undefined

    const repoFileTree = await res.json()

    const filesArray = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    const posts = []
    for (const file of filesArray) {
        const post = await getPostByName(file)
        if (post) {
            const { meta, content } = post
            posts.push({ meta, content })
        }
    }

    return posts.sort((a, b) => a.meta.date < b.meta.date ? 1 : -1)
}