import './Subreddit.css'

const Subreddit = ({name, img, index}) => {
    return (
        <ul className='subreddit'>
            <button className='subreddit-button'>
                {<img src={img}/>}
                <li className='subreddit-name'>{name}</li>
            </button>
        </ul>
    )
};

export default Subreddit;