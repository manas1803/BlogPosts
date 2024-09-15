import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogsSlice";
import usersSlice from "../features/users/usersSlice";

const store = configureStore({
    reducer:{
        blogsList:blogsSlice,
        usersList:usersSlice
    }
})

export default store;