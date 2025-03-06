import Subreddit from '../../Subreddit/Subreddit';
import './Subreddits.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchSubreddits } from '../../Slices/subRedditSlice/subRedditSlice';
import { fetchPosts } from '../../Slices/postSlice/postSlice';
import { selectSubreddits, selectSubredditsIsLoading } from '../../Slices/subRedditSlice/subRedditSlice';

const Subreddits = () => {
    const dispatch = useDispatch();
    const { subreddits } = useSelector(selectSubreddits);
    const subredditsLoading = useSelector(selectSubredditsIsLoading);
    let subredditCount = 0;
    let postCount = 0;

    useEffect(() => {
        if(subredditCount > 0) return
        dispatch(fetchSubreddits());
        subredditCount++;
    }, []);

    useEffect(() => {
        if(postCount > 0) return
        dispatch(fetchPosts('popular'));
        postCount++;
    }, []);

    if(subredditsLoading) return (
        <aside>
            <h2>Subreddits</h2>
            <p>Loading Subreddits...</p>
        </aside>
    )

    return (
        <aside>
             <h2>Subreddits</h2>
             {subreddits.map((subreddit, index) => {
                return <Subreddit name={subreddit.name} img={subreddit.img} key={index} />
             })}
        </aside>
    )
};

export default Subreddits;