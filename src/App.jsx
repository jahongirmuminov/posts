import { useState } from 'react';
import AddForm from './features/posts/AddForm';
import PostList from './features/posts/PostList';

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center'>
      <AddForm />
      <PostList />
    </div>
  );
}

export default App;
