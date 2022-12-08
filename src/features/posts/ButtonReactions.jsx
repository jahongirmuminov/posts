import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';
const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😱',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};
const ButtonReactions = ({ post }) => {
  const dispatch = useDispatch();
  const reactButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='btn btn-outline-secondary mx-2 text-white'
        type='button'
        onClick={() =>
          dispatch(reactionAdded({ userId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactButtons}</div>;
};

export default ButtonReactions;
