import React from 'react';
import { useSelector } from 'react-redux';
import ButtonReactions from './ButtonReactions';
import PostAuthor from './PostAuthor';
import { selectAllPost } from './postSlice';
import TimeAgo from './TimeAgo';

const PostList = () => {
  const posts = useSelector(selectAllPost);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} className='card bg-dark p-3 text-white m-3'>
      <h3>{post.title}</h3>
      <p>{post.title}</p>
      <p>
        <TimeAgo timestamp={post.date} />
        <PostAuthor userId={post.userId} />
      </p>
      <ButtonReactions post={post} />
    </article>
  ));

  return (
    <div>
      <h2 className='fw-bold text-white'>Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostList;
