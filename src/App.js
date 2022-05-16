import React, { useEffect } from "react";
import "./App.css";

import useToken from './app/useToken';
import { Login } from "./features/login/Login";
import HomePage from "./features/HomePage";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userCurrent } from "./redux/user";

function App() {
  const navigate = useNavigate()
  const { token } = useToken()
  const dispatch = useDispatch()

  const handleStoreUser = () => {
    dispatch(userCurrent(token))
  }

  useEffect(() => {
    if (!token) {
      navigate('/login')
    }
    else {
      handleStoreUser()
      navigate('/homepage')
    }
  }, [])

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
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
