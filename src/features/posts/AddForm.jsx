import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sellectAllUsers } from '../users/userSlice';
import { addPost } from './postSlice';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');
  const dispatch = useDispatch();

  const users = useSelector(sellectAllUsers);
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeContent = (e) => setContent(e.target.value);
  const onChangeAuthor = (e) => setUserId(e.target.value);

  const hadleSavePost = (e) => {
    e.preventDefault();
    if ((title && content, userId)) {
      dispatch(addPost(title, content, userId));
    }
  };

  const canSave = Boolean(content) && Boolean(title) && Boolean(userId);
  const authorOptions = users.map((user) => (
    <option value={user.id}>{user.name}</option>
  ));
  return (
    <section style={{ width: '50%' }}>
      <h2 className='fw-bold mt-4 text-white'>Add a New Post</h2>
      <form>
        <label htmlFor='postTitle'>Title:</label>
        <input
          type='text'
          id='postTitle'
          className='form-control'
          name='postTitle'
          value={title}
          onChange={onChangeTitle}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select
          className='form-select'
          name='postAuthor'
          id='postAuthor'
          onChange={onChangeAuthor}
          value={userId}
        >
          <option value=''>Select an Author</option>
          {authorOptions}
        </select>
        <label htmlFor='postContnent'>Content:</label>
        <textarea
          id='postContnent'
          className='form-control'
          name='postContnent'
          value={content}
          onChange={onChangeContent}
        />

        <button
          type='button'
          className='btn my-3 btn-light'
          disabled={!canSave}
          onClick={hadleSavePost}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddForm;
