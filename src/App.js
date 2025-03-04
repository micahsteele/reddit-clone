import './App.css';
import Navbar from './Components/Layout/Navbar/Navbar';
import Posts from './Components/Layout/Posts/Posts';
import Subreddits from './Components/Layout/Subreddits/Subreddits';

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
