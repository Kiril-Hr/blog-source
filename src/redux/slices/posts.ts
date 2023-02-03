import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
}) 

const initialState = {
    posts: {
        items:[],
        status: 'loading',
    },
    tags: {
        items: [],
        status: 'loading'
    }
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchPosts.pending, (state) => {
            state.posts.items = []
            state.posts.status = 'loading'
        })

        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'loaded'
        })

        builder.addCase(fetchPosts.rejected, (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        })

    }, 
})

export const postReducer = postSlice.reducer