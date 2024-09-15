import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authors: [
    {
      id: "1",
      name: "Dude Lebowski",
    },
    {
      id: "2",
      name: "Linus Torvald",
    },
    {
      id: "3",
      name: "Warren Buffet",
    },
  ],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const getAllAuthors = (state)=>state?.usersList?.authors

export default usersSlice.reducer
