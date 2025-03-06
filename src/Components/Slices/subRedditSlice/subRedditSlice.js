import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState: {
        subreddits: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchSubreddits.fulfilled, (state, aciton) => {
            console.log(aciton.payload)
            aciton.payload.forEach(element => {
              state.subreddits.push(element)  
            })
        })
    }
});

export const selectSubreddits = (state) => state.subreddits;

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
    console.log(children);
    return subredditInfo;
});

export default subredditsSlice.reducer;
