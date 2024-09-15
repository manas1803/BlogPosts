import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../features/posts/PostSlice";

const store = configureStore({
    reducer:{
        postLists:PostSlice
    }
})

export default store;