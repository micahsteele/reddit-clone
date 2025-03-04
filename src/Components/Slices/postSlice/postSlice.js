import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const activePostsSlice = createSlice({
    name: 'activePosts',
    initialState: {
        posts: [],
        filteredPosts: [],
    },
    reducers: {
        loadActivePosts: (state, action) => {
            state.posts.push(action.payload)
        }   
    },
});

export default activePostsSlice.reducer;