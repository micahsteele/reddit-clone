import './Post.css';
import { RxThickArrowUp, RxThickArrowDown } from "react-icons/rx";
import { LiaComments } from "react-icons/lia";

const Post = (props) => {
    return (
        <article>
            <div className='post'>
                <div className='post-votes'>
                    <button className='up-vote'><RxThickArrowUp className='up-vote-icon' /></button>
                    <p className='count-vote'>{props.count}</p>
                    <button className='down-vote'><RxThickArrowDown /></button>
                </div>
                <div className='post-container'>
                    <div className='post-title'>{props.title}</div>
                    <img src={props.img} />
                    <div className='post-details'>
                        <span className='post-author'>{props.author}</span>
                        <span className='post-subreddit'>r/{props.subreddit}</span>
                        <button className='post-comments'><LiaComments />{props.numComments}</button>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;