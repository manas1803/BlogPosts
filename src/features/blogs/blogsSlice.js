import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  blogs: [
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

const blogsSlice = createSlice({
  name: "blogLists",
  initialState,
  reducers: {
    addBlog: {
      reducer: (state, action) => {
        state.blogs.push(action.payload);
      },
      prepare: (title, content,author) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author
          },
        };
      },
    },
  },
});

export const getAllBlogs = (state) => state?.blogsList?.blogs;
export const { addBlog } = blogsSlice.actions;
export default blogsSlice.reducer;
