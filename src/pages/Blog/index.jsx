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
            <h1 className='blog-title'>{blog.title}</h1>

          </header>
          <img src={blog.cover} alt='cover'></img>
          <div id='id-description'>
          <div className='blog-description'dangerouslySetInnerHTML={{ __html:blog.description}}/>
          </div>
          <div className='blog-subCategory'>
            {blog.subCategory.map(
              (category, index) =>
                <div key={index}>
                  <Chip label={category} />
                </div>
            )}
          </div>
          <div className="blog-references">
            <p className=''>Referencias</p>
            <ol>
              {blog.references.map((reference, index) => <li key={index}><a href={reference.source}>{reference.name}</a></li>)}
            </ol>
          </div>
        </div>
      }
    </div >
  )
}

export default Blog;
