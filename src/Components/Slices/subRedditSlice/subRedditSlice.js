import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const subredditsSlice = createSlice({
    name: 'Subreddits',
    initialState: {
        Subreddits: [{}]
    },
    reducers: {}
});

export const fetchSubreddits = createAsyncThunk('subreddits/fetchSubreddits', async() => {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    const jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
});

export default subredditsSlice.reducer;
