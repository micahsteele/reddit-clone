import './Post.css';

const Post = () => {
    return (
        <article>
            <div className='post'>
                <div className='post-votes'>
                    <button>up</button>
                    <p>count</p>
                    <button>down</button>
                </div>
                <div className='post-container'>
                    <div className='post-title'>title</div>
                    <div className='post-image'>image</div>
                    <div className='post-details'>
                        <span className='post-author'>author</span>
                        <span className='post-time'>time</span>
                        <span className='post-comments'>comments</span>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;