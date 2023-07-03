import React, { useContext } from 'react';
import { BlogContext } from './Context';
import { Link } from 'react-router-dom';

const PostContent = () => {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
      <Link to="/">Back</Link>
    </div>
  );
};

export default PostContent;