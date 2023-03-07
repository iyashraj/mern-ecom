import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        handleLoggedIn: (state, {payload}) => {
            state.isLoggedIn = payload
        }
    }
})

export const {handleLoggedIn} = rootSlice.actions
export default rootSlice.reducer;