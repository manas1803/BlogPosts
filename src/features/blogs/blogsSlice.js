import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";
import { BLOG_API_URL } from "../../common/constants";

const initialState = {
  status: "idle",
  blogs: [],
  error: null,
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  try {
    const response = await axios.get(BLOG_API_URL);
    return [...response.data];
  } catch (error) {
    return error.message;
  }
});

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
            date: new Date().toISOString(),
          },
        };
      },
    },
    addReactions: {
      reducer: (state, action) => {
        const { blogId, reaction } = action.payload;
        const existingBlog = state.blogs.find((blog) => blog.id === blogId);
        if (existingBlog) {
          existingBlog.reactions[reaction]++;
        }
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "success";
        let min = 1;
        
        const loadBlogs = action.payload.map((blog) => {
          blog.date = sub(new Date(), { minutes: min++ }).toISOString();
          blog.reactions = {
            thumbsUp: 0,
            clap: 0,
            heart: 0,
            thumbsDown: 0,
          };
          return blog;
        });
        state.blogs = state.blogs.concat(loadBlogs)
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getAllBlogs = (state) => state?.blogsList?.blogs;
export const getBlogStatus = (state)=>state?.blogsList?.status;
export const getBlogError = (state)=>state?.blogsList?.error

export const { addBlog, addReactions } = blogsSlice.actions;
export default blogsSlice.reducer;
