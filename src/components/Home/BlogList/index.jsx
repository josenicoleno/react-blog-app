import React from 'react'
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
    return (
        <div className='blogList-wrap'>
            {/* {blogs.map((blog, i = 1) => <BlogList blog={blog} id={i + 1} />)} */}
            {blogs.map((blog) => (
                <BlogItem blog={blog} key={blog.id}/>
            ))}
        </div>
    )
}

export default BlogList;
