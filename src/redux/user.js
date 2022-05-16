import { createSlice } from "@reduxjs/toolkit";
let initialState = {
    username: "",
    userInfo: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userCurrent: {
            reducer(state, action) {
                const user = action.payload;
                state.username = user
            },
        },
    },
});

export const SignInUser = (state) => state.user;

export const { userCurrent } = userSlice.actions;

export default userSlice.reducer;
