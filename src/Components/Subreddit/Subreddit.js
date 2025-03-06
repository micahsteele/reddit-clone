import './Subreddit.css'
import { clearPosts, fetchPosts } from '../Slices/postSlice/postSlice';
import { useDispatch } from 'react-redux';


const Subreddit = ({name, img, index}) => {
    const dispatch = useDispatch();

    const loadPosts = () => {
        console.log('loading posts from subreddit');
        dispatch(clearPosts());
        dispatch(fetchPosts(name))
    };

    if(document.getElementsByClassName('subreddit'))

    return (
        <ul className='subreddit'>
            <button className='subreddit-button' onClick={loadPosts}>
                {<img src={img} alt='subreddit community icon'/>}
                <li className='subreddit-name'>{name}</li>
            </button>
        </ul>
    )
};

export default Subreddit;