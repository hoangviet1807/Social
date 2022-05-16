import { Avatar, InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
import { useQuery } from "react-query";
import { getRoom } from "../../../services/services";
import { useDispatch, useSelector } from "react-redux";
import { roomSelected, selectRoom } from "../../../redux/rooms";

const LeftSide = () => {
  const user = localStorage.getItem("username");
  const { data, isLoading } = useQuery(["rooms"], () => getRoom(user), {});
  const dispatch = useDispatch();
  const room = useSelector(selectRoom);

  console.log("roomSelected", room);
  return (
    <div>
      <div className="header">
        <h2>Message</h2>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search..."
          size="small"
          style={{ width: "80%", backgroundColor: "#f3f3f3" }}
        />
      </div>
      {!isLoading &&
        data?.map((val) => (
          <div
            key={val._id}
            className="list-message"
            onClick={() => dispatch(roomSelected(val._id))}
          >
            <div className="avatar">
              <Avatar>{val.roomName.charAt(0)}</Avatar>
            </div>
            <div className="info">
              <div className="message">
                <span className="name">{val.roomName}</span>
                <span
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {val.messages.pop()?.message}
                </span>
              </div>
              <div className="timestamp">
                <span className="time"> {val.messages.pop()?.timestamps}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LeftSide;
