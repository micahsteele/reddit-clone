import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchSubreddits.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchSubreddits.fulfilled, (state, aciton) => {
            state.isLoading = false;
            aciton.payload.forEach(element => {
              state.subreddits.push(element)  
            })
        })
    }
});

export const selectSubreddits = (state) => state.subreddits;
export const selectSubredditsIsLoading = (state) => state.subreddits.isLoading;

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async() => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const jsonData = await response.json();
    const data = jsonData.data;
    const children = data.children;
    const subredditInfo = children.map((t) => {
        return {
            name: t.data.subreddit,
            img:  t.data.thumbnail,
        }
    });
    return subredditInfo;
});

export default subredditsSlice.reducer;
