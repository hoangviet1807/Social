import React, { useState } from "react";
// import { Route, Routes } from 'react-router-dom';
import "./App.css";
// import AddPostFrom from './features/posts/AddPostFrom';
// import PostList from './features/posts/PostList';
// import { Login } from './features/login/Login'
// import useToken from './app/useToken';
import { io } from "socket.io-client";
import Chat from "./Chat";
import { Login } from "./features/login/Login";

const socket = io.connect("http://localhost:3002");

function App() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    // <main className="App">
    //   <Routes>
    //     <Route path="/" element={<PostList />} />
    //     <Route path="addPost" element={<AddPostFrom />} />
    //   </Routes>
    //   {/* <AddPostFrom />
    //   <PostList /> */}
    // </main>
    <div>
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
      <Login />
    </div>
  );
}

export default App;
