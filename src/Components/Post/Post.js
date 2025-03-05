import './Post.css';
import { RxThickArrowUp, RxThickArrowDown } from "react-icons/rx";
import { LiaComments } from "react-icons/lia";

const Post = () => {
    return (
        <article>
            <div className='post'>
                <div className='post-votes'>
                    <button className='up-vote'><RxThickArrowUp  /></button>
                    <p>count</p>
                    <button className='down-vote'><RxThickArrowDown /></button>
                </div>
                <div className='post-container'>
                    <div className='post-title'>title</div>
                    <div className='post-image'>image</div>
                    <div className='post-details'>
                        <span className='post-author'>author</span>
                        <span className='post-time'>time</span>
                        <span className='post-comments'><LiaComments /></span>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Post;