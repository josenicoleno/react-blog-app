import React, { useState } from 'react'
import EmptyList from '../../components/common/EmptyList';
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
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
      {/* Page Header */}
      <Header />
      {/* Search bar*/}
      <SearchBar
        value={searchKey}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
      />

      {/* Blog list & Empty List */}
      {blogs.length ? <BlogList blogs={blogs} /> : <EmptyList/>}
    </div>
  )
}

export default Home;
