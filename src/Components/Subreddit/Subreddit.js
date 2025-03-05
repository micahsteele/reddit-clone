import './Subreddit.css'

const Subreddit = ({name, img, index}) => {
    return (
        <ul className='subreddit'>
            {<img src={img}/>}
            <li>{name}</li>
        </ul>
    )
};

export default Subreddit;