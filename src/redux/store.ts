import { configureStore } from '@reduxjs/toolkit'
import { postReducer } from './slices/posts'
import { authReducer } from './slices/auth'


const store = configureStore({
    reducer: {
        auth: authReducer,
        posts: postReducer,
    },
})

export default store