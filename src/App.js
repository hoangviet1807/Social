import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import AddPostFrom from './features/posts/AddPostFrom';
// import PostList from './features/posts/PostList';
// import { Login } from './features/login/Login'
import useToken from './app/useToken';
import { io } from "socket.io-client";
// import Chat from "./Chat";
import { Login } from "./features/login/Login";
import HomePage from "./features/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* {!showChat ?
        <div className='joinChatContainer'>
          <h3>Join A Chat</h3>
          <input type={"text"} placeholder="John..." onChange={(e) => setUsername(e.target.value)} ></input>
          <input type={"text"} placeholder="Room Id" onChange={(e) => setRoom(e.target.value)}></input>
          <button onClick={joinRoom}>Join a room</button>
        </div>
        :
        <Chat socket={socket} username={username} room={room} />
      } */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
