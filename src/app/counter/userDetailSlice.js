import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchUsersDetails = createAsyncThunk('userDetails/fetchUsersDetails', async (path) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${path}`)
    return res.data;
})

const userDetailSlice = createSlice({
    name: 'userDetails',
    initialState: {
        isLoading: false,
        userDetails: [],
        error: null
    },

    extraReducers: (builder) => {
        builder.addCase(fetchUsersDetails.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchUsersDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.userDetails = action.payload;
            state.error = null;
        })

        builder.addCase(fetchUsersDetails.rejected, (state, action) => {
            state.isLoading = true;
            state.userDetails = [];
            state.error = action.error.message;
        })
    }
    
})

export default userDetailSlice.reducer