import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        filteredPosts: [],
    },
    reducers: {
        loadSubredditPosts: (state, action) => {
            state.posts.push(action.payload)
        },
        clearPosts: (state) => {
            state.posts = []
            state.filteredPosts = []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            action.payload.forEach(element => {
                state.posts.push(element)
            });
        })
    },
});

export const selectPosts = (state) => state.posts;
export const { loadSubredditPosts, clearPosts } = postsSlice.actions;

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async(posts) => {
    const response = await fetch(`https://www.reddit.com/r/${posts}.json`);
    const jsonData = await response.json();
    const data = jsonData.data;
    const children = data.children;
    const subredditInfo = children.map((t) => {
        return {
           title: t.data.title,
           author: t.data.author,
           img: t.data.thumbnail,
           numComments: t.data.num_comments,
           count: t.data.score,
           subreddit: t.data.subreddit,
        }
    });
    console.log(children);
    return subredditInfo;
});

export default postsSlice.reducer;