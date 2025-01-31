import { Link, Outlet } from 'react-router-dom';
import './NavBar.css'

function NavBar() {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Register</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/users">User List</Link></li>
                    <li><Link to="/todo">To-Do</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );

}

export default NavBar;