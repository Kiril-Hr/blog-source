import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios'

///////////////////////////////////////////////////////// - posts

export const fetchPosts = createAsyncThunk('/posts/fetchPosts', async () => {
    const { data } = await axios.get('/posts')
    return data
})

export const fetchPostsPopular = createAsyncThunk('/posts/fetchPostsPopular', async () => {
    const { data } = await axios.get('/posts/popular')
    return data
})

export const fetchRemovePost = createAsyncThunk('/posts/fetchRemovePost', async ({id, userId}:any) => 
    axios.delete(`/posts/${id}/${userId}`)
)
///////////////////////////////////////////////////////// - tags
export const fetchTags = createAsyncThunk('/posts/fetchTags', async () => {
    const { data } = await axios.get('/tags')
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
    },
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
/////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////
        builder.addCase(fetchTags.pending, (state) => {
            state.tags.items = []
            state.tags.status = 'loading'
        })

        builder.addCase(fetchTags.fulfilled, (state, action) => {
            state.tags.items = action.payload
            state.tags.status = 'loaded'
        })

        builder.addCase(fetchTags.rejected, (state) => {
            state.tags.items = []
            state.tags.status = 'error'
        })
/////////////////////////////////////////////////////////////////////
        builder.addCase(fetchRemovePost.pending, (state, action) => {
            state.posts.items = state.posts.items.filter((obj:any) => obj._id !== action.meta.arg.id)
        })
/////////////////////////////////////////////////////////////////////
        builder.addCase(fetchPostsPopular.pending, (state) => {
            state.posts.items = []
            state.posts.status = 'loading'
        })

        builder.addCase(fetchPostsPopular.fulfilled, (state, action) => {
            state.posts.items = action.payload
            state.posts.status = 'loaded'
        })

        builder.addCase(fetchPostsPopular.rejected, (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        })
    }, 
})

export const postReducer = postSlice.reducer