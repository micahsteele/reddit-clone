import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        filteredPosts: [],
    },
    reducers: {},
    extraReducers: {},
});

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async(posts) => {
    const response = await fetch(`https://www.reddit.com/r/${posts}.json`);
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
});

export default postsSlice.reducer;