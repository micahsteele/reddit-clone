import Post from '../../Post/Post';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectPosts } from '../../Slices/postSlice/postSlice';

const Posts = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector(selectPosts);

    // useEffect(() => {
    //     dispatch()
    // });

    return (
        <div className='Posts'>
            {posts.map((post, index) => {
                return <Post title={post.title} author={post.author} numComments={post.numComments} 
                count={post.count} img={post.img} subreddit={post.subreddit} key={index} />
            })}
        </div>
    )
};

export default Posts;