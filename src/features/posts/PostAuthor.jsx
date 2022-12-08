import React from 'react';
import { useSelector } from 'react-redux';
import { sellectAllUsers } from '../users/userSlice';

const PostAuthor = ({ userId }) => {
  const users = useSelector(sellectAllUsers);

  const author = users.find((user) => user.id === userId);

  return (
    <span className='text-bold'>
      &nbsp; by {author ? author.name : 'Unknown author'}
    </span>
  );
};

export default PostAuthor;
