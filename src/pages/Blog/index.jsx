import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Blog/BlogList';
import Header from '../../components/Blog/Header'
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Blog = () => {
  const [blogs, setBlogs] = useState(blogList.filter(blog => blog.active === true));
  const [searchKey, setSearchKey] = useState('');

  //search submit
  const handleSearchSubmit = event => {
    event.preventDefault();
    handleSearchResults();
  }

  //search for blogs my categories
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter(blog => blog.title.toLowerCase().includes(searchKey.toLowerCase().trim()));
    setBlogs(filteredBlogs);
  }
  //to clear search
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }

  return (
    <div>
      <Header />
      <SearchBar
        value={searchKey}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
      />
      {blogs.length ? <BlogList blogs={blogs} /> : <EmptyList />}
    </div>
  )
}

export default Blog;
