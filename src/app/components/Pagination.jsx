import React from 'react'

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize); // 100/10

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <div>
            <ul>
                {pages.map((page) => (
                    <li
                        key={page}
                    >
                        <a onClick={console.log(page)}>
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Pagination