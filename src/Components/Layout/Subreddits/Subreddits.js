import Subreddit from '../../Subreddit/Subreddit';
import './Subreddits.css';
import { useDispatch, useSelector } from 'react-redux';

const Subreddits = () => {
    const dispatch = useDispatch();


    return (
        <aside>
             <h2>Subreddits</h2>
             <Subreddit />
        </aside>
    )
};

export default Subreddits;