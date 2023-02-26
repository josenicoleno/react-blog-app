import React from 'react'
import './styles.css'
import Chip from '../../../common/Chip';
import { Link, useNavigate } from 'react-router-dom';

const BlogItem = ({ blog }) => {

    let navigate = useNavigate();
    const routeChange = () =>{
        let routeChange = `/blog/${blog.id}`;
        navigate(routeChange)
    }

    return (
        <div className='blogItem-wrap' onClick={routeChange}>
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
