import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav-title'>
                <Link to='/'><h2>Holiday Auction</h2></Link>
            </div>
            <ul>
                <li className='nav-item'>
                    <button type='button' id='admin-link'>
                        <Link to='/admin' >Admin</Link>
                    </button>
                </li>
                <li className='nav-item'>
                    <button type='button'>
                        <Link to='/login'>Login</Link>
                    </button>
                </li>
                <li className='nav-item'>
                    <button type='button' onClick={() => {
                    }}>Logout</button>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;