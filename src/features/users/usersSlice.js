import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: "Victor" },
    { id: '1', name: ' Yasuo' },
    { id: '2', name: 'Zed' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users

export default usersSlice.reducer