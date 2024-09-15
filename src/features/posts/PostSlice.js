import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  posts: [
    {
      id: "1",
      title: "Learning React",
      content: "React is powerful",
    },
    {
      id: "2",
      title: "Learning Redux",
      content: "Redux is powerful",
    },
  ],
};

const postsSlice = createSlice({
  name: "postLists",
  initialState,
  reducers: {},
});

export const getAllPosts = (state) => state.postLists;
export default postsSlice.reducer;
