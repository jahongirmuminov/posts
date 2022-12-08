import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/posts/postSlice';
import usersReducer from '../features/users/userSlice';

const store = configureStore({
  reducer: {
    posts: postReducer,
    users: usersReducer,
  },
});

export default store;
