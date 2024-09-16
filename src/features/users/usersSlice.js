import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API_URL } from "../../common/constants";

const initialState = {
  status:"idle",
  authors: [],
  error:null
};

export const fetchUsers = createAsyncThunk("users/fetchUsers",async()=>{
  try{
    const response = await axios(USERS_API_URL,{
      method:"get"
    })
    return [...response.data]
  }
  catch(error){
    return error.message
  }
})

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(fetchUsers.pending,(state,action)=>{
      state.status="loading"
    })
    .addCase(fetchUsers.fulfilled,(state,action)=>{
      state.status="success"
      state.authors.push(...action.payload)
    })
    .addCase(fetchUsers.rejected,(state,action)=>{
      state.status="failed"
      state.error=action.payload
    })
  }
});

export const getAllAuthors = (state)=>state?.usersList?.authors

export default usersSlice.reducer
