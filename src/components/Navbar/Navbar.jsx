import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar--logo'>
                <img className="logo" src='/images/logo.svg' alt = 'logo'/>
            </div>

            <h1 className='navbar--name'>Viviana Alba</h1>

            <div className='navbar--right'>
                <div className="navbar--links">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
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
