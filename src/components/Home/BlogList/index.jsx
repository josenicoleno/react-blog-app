import React from 'react'

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
            {blogs.map((blog, i = 1) => <BlogList blog={blog} id={i + 1} />)}
        </div>
    )
}

export default BlogList;
