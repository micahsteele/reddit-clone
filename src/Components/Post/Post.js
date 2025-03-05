import './Post.css';
import { RxThickArrowUp, RxThickArrowDown } from "react-icons/rx";
import { LiaComments } from "react-icons/lia";

const Post = (props) => {
    return (
        <article>
            <div className='post'>
                <div className='post-votes'>
                    <button className='up-vote'><RxThickArrowUp  /></button>
                    <p>{props.count}</p>
                    <button className='down-vote'><RxThickArrowDown /></button>
                </div>
                <div className='post-container'>
                    <div className='post-title'>{props.title}</div>
                    <div className='post-image'><img src={props.img} /></div>
                    <div className='post-details'>
                        <span className='post-author'>{props.author}</span>
                        <span className='post-time'>time</span>
                        <span className='post-comments'><LiaComments />{props.numComments}</span>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;