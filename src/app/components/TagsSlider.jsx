import { getPostByName, getPostsMeta } from '../../../lib/posts'
import Link from 'next/link'

export default async function TagsSlider() {
    const posts = await getPostsMeta()

    const postTagsArr = []
    for (const post of posts) {
        const res = await getPostByName(`${post.meta.id}.mdx`)
        postTagsArr.push(res.meta.tags.filter(tag => postTagsArr.indexOf(tag) === -1))
    }

    const tagsCombined = [].concat.apply([], postTagsArr);

    let countTags = tagsCombined.reduce(function (value, value2) {
        return (
            value[value2] ? ++value[value2] : (value[value2] = 1),
            value
        );
    }, {});

    const countTagsArr = Object.entries(countTags);

    function sortArr(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    }

    const topTags = (tagsCount) => (countTagsArr.sort(sortArr).slice(0, tagsCount))

    const content = topTags(5).map((tag, id) => {
        return (
            <li className='border border-black tag__item flex-1 text-center' key={id} >
                <Link href={`/tags/${tag[0]}`} >
                    <div className='px-6 py-2 bg-black text-white'>
                        {tag[0]}
                    </div>
                    <div className='py-2 hover:text-primary-color'>
                        {`${tag[1]} posts`}
                    </div>
                </Link>
            </li>
        )
    }
    )

    return (
        <ul className='flex gap-4 flex-wrap w-full py-6'>{content}</ul>
    )
}
