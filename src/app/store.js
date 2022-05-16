import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";
import roomReducer from "../redux/rooms";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    room: roomReducer,
  },
});
