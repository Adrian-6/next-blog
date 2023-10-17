import Link from 'next/link';
import '../../../src/app/globals.css'

export default function PagesList({ page, pages }) {
    //creates the array of numbers to use in a page list
    let i = 1;

    let pagesNum = [page]

    while (i <= 3) {
        if (page - i > 0) {
            pagesNum.unshift(page - i)
        } else if (page + i <= pages) {
            pagesNum.push(page + i)
            i++
        }
        if (page + i <= pages) {
            pagesNum.push(page + i)
        } else if (page - i > 1) {
            pagesNum.unshift(page - 1 - i)
            i++
        }
        i++
    }

    const firstPage = (pagesNum.at(0) > 2) ?
        <>
            <Link href={`/posts/1`} key="1" className="item">
                1
            </Link>
            <span className='select-none'>
                &hellip;
            </span>
        </>
        : (pagesNum.at(0) === 2) ?
            <Link href={`/posts/1`} key="1" className="item">
                1
            </Link>
            : null
    const lastPage = (pagesNum.at(-1) < pages - 1) ?
        <>
            <span className='select-none'>
                &hellip;
            </span>
            <Link href={`/posts/${pages}/`} key={pages} className="item select-none">
                {pages}
            </Link>
        </>
        : (pagesNum.at(-1) === pages - 1) ?
            <Link href={`/posts/${pages}`} key={pages} className="item">
                {pages}
            </Link>
            : null

    let pageLinks = pagesNum.map(num => {
        if (page == num) {
            return <Link href={`/posts/${num}`} className='item__selected text-bold text-primary-color border-primary-color' key={num}>{num}</Link>
        }
        return <Link href={`/posts/${num}`} className="item" key={num}>{num}</Link>
    })
    return (
        <span className="flex mx-auto text-xl gap-2">
            {firstPage}
            {pageLinks}
            {lastPage}
        </span>
    )
}