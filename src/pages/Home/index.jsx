import React from 'react'
import BlogList from '../../components/Home/BlogList';
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/SearchBar';
import { blogList } from '../../config/data';

const Home = () => {
  return (
    <div>
      {/* Page Header */}
      <Header/>
      {/* Search bar*/}
      <SearchBar/>

      {/* Blog list & Empty List */}
      <BlogList blogs={blogList}/>
    </div>
  )
}

export default Home;
