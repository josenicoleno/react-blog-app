import React from 'react'
import './style.css'
import Chip from '../../../common/Chip';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog }) => {
    return (
        <div className='blogItem-wrap'>
            <img src={blog.cover} alt={blog.cover} className="blogItem-cover"></img>
            <Chip label={blog.category} />
            <h3>{blog.title}</h3>
            <p className='blogItem-description'>{blog.description}</p>
            <footer>
                <div className="blogItem-author">
                    <img src={blog.authorAvatar} alt="avatar" />
                    <div>
                        <h6>{blog.authorName}</h6>
                        <p>{blog.createdAt}</p>
                    </div>
                </div>
                <Link to={`/blog/${blog.id}`} className="blogItem-link">Ir →</Link>
            </footer>
        </div>
    )
}
export default BlogItem;
