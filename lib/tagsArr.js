import { getPostByName, getPostsMeta } from './posts'

const posts = await getPostsMeta()

const postTagsArr = []
for (const post of posts) {
    const res = await getPostByName(`${post.meta.id}.mdx`)
    //let stringContent = postContent.content.toString();
    postTagsArr.push(res.meta.tags.filter(tag => postTagsArr.indexOf(tag) === -1))
}

export const tagsArr = Array.from(new Set(postTagsArr.flat()))