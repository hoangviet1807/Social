import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddPostFrom from './features/posts/AddPostFrom';
import PostList from './features/posts/PostList';
import { Login } from './features/login/Login'
import useToken from './app/useToken';

function App() {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="addPost" element={<AddPostFrom />} />
      </Routes>
      {/* <AddPostFrom />
      <PostList /> */}
    </main>
  );
}

export default App;
