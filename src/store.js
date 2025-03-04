import { configureStore } from '@reduxjs/toolkit';
import activePostsReducer from './Components/Slices/postSlice/postSlice';

export const store = configureStore({
    reducer: {
        activePosts: activePostsReducer,
    }
});
