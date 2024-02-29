import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar--logo'>
                <img className="logo" src='/images/1.svg' alt = 'logo'/>
            </div>
            <div className='navbar--right'>
                <h1>Viviana Alba</h1>
                <div className="navbar--links">
                    <ul>
                        <li>
                            <Link to='/home'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
