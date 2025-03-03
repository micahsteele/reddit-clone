import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          Micahs Reddit Clone
        </div>
        <div>
          <form>
            <input type='text' placeholder='Search SubReddit...' name='search' />
            <button type='submit' >Submit</button>
          </form>
        </div>
      </header>
      <div className='App-main'>
        <p>main</p>
      </div>
      <aside>
        <p>aside</p>
      </aside>
    </div>
  );
}

export default App;
