import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  blogs: [
    {
      id: "1",
      title: "Learning React",
      content: "React is powerful",
      date: sub(new Date(), { minutes: 10 }).toISOString(),
      reactions:{
        thumbsUp:0,
        clap:0,
        heart:0,
        thumbsDown:0
      }
    },
    {
      id: "2",
      title: "Learning Redux",
      content: "Redux is powerful",
      date: sub(new Date(), { minutes: 5 }).toISOString(),
      reactions:{
        thumbsUp:0,
        clap:0,
        heart:0,
        thumbsDown:0
      }
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
      prepare: (title, content, author) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author,
            date: new Date().toISOString()
          },
        };
      },
    },
    addReactions:{
      reducer:(state,action)=>{
        const {blogId,reaction} = action.payload
        const existingBlog = state.blogs.find((blog)=>blog.id===blogId)
        if(existingBlog){
          existingBlog.reactions[reaction]++
        }
      }
    }
  },
});

export const getAllBlogs = (state) => state?.blogsList?.blogs;
export const { addBlog,addReactions } = blogsSlice.actions;
export default blogsSlice.reducer;
