import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link, useNavigate } from 'react-router-dom';
import './bloglist.css'

const BlogList = () => {
  const nav = useNavigate()
  const { posts } = useContext(BlogContext);

  const clickHandle =(e)=>{
    const id = e.target.id
    console.log(id);
    
    nav(`/postcontent/${id}`)
  }

  return (
    <div>
        <h1>All Blogs</h1>
      {posts.map((post, index) => (
        <div key={index}>
            
                  <h2 id={post.id} onClick={clickHandle}>{post.title}</h2>
                  
        </div>
      ))}
      <button onClick={()=>{nav('/')}}>Back</button>
    </div>
  );
};

export default BlogList;