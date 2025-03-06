import Post from '../../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts, selectLoading } from '../../Slices/postSlice/postSlice';

const Posts = () => {
    const { posts } = useSelector(selectPosts);
    const loadingPosts = useSelector(selectLoading);

    if(loadingPosts) return (
            <div className='Posts'>
                <p>Loading Posts...</p>
            </div>
    );

    return (
        <div className='Posts'>
            {posts.map((post, index) => {
                return <Post title={post.title} author={post.author} numComments={post.numComments} 
                count={post.count} img={post.img} subreddit={post.subreddit} key={index} />
            })}
        </div>
    );
};

export default Posts;