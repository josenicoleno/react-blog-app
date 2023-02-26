import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import EmptyList from '../../components/common/EmptyList';
import { blogList } from '../../config/data';
import './styles.css';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog)
    }
  }, [id]);

  return (
    <div>
      <Link className='blog-goBack' to='/'>
        <span>&#8592;</span>Volver
      </Link>
      {!blog ?
        <EmptyList /> :
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Publicado el {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map(
                (category, index) =>
                  <div key={index}>
                    <Chip label={category} />
                  </div>
              )}
            </div>
          </header>
          <img src={blog.cover} alt='cover'></img>
          <p className='blog-description'>{blog.description}</p>
        </div>
      }
    </div>
  )
}

export default Blog;
