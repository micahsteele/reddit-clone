import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Components/Slices/postSlice/postSlice';
import subredditsReducer from './Components/Slices/subRedditSlice/subRedditSlice';


export const store = configureStore({
    reducer: {
        posts: postsReducer,
        subreddits: subredditsReducer,
    }
});
