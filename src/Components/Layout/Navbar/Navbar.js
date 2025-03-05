import './Navbar.css';

const Navbar = () => {
    return (
        <header className='App-header'>
            <div>
                Micah's Reddit Clone
            </div>
            <div>
                <form>
                    <input type='text' placeholder='Search SubReddit...' name='search' />
                    <button type='submit' >Submit</button>
                </form>
            </div>
        </header>
    ) 
};

export default Navbar;