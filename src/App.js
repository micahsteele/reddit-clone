import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Posts from './Components/Posts/Posts';
import Subreddits from './Components/Subreddits/Subreddits';

function App() {
  return (
    <div className='App'>
        <Navbar />
        <Posts />
        <Subreddits />
    </div>
  );
}

export default App;
