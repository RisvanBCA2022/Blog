import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link } from 'react-router-dom';
import './bloglist.css'

const PostList = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
        <h1>All Blogs</h1>
      {posts.map((post, index) => (
        <div key={index}>
            
                  <Link to="/postcontent"><h2>{post.title}</h2></Link>
                  
        </div>
      ))}
      <Link to="/"><button>Back</button></Link>
    </div>
  );
};

export default PostList;