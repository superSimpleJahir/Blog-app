import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogs: [],
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        setBlogs: (state, action) => {
            state.blogs = action.payload;
        },
        addBlog: (state, action) => {
            state.blogs.push(action.payload);
        },
        updateBlog: (state, action) => {
            state.blogs = state.blogs.map((blog) =>
                blog.$id === action.payload.$id ? action.payload : blog
            );
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter(
                (blog) => blog.$id !== action.payload
            );
        },
    },
});

export const { setBlogs, addBlog, updateBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
