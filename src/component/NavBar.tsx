import {Link} from 'react-router-dom';
import './NavBar.css';
export default function NavBar() {
    return (
        <nav className='navbar'>
        <h1>FoodFoodApp</h1>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/search">Search</Link>
            </li>
            <li>
            <Link to="/profile">Profile</Link>
            </li>
        </ul>
        </nav>
    );
    }