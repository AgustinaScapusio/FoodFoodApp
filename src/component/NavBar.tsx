import {Link} from 'react-router-dom';
import logo from '../assets/vectorstock_46110475_transparent.png';
import Button from './Button';
import './NavBar.css';
export default function NavBar() {
    return (
        <nav className='navbar'>
        <div className='logo-container'>
        <img src={logo} alt="logo" />
        <h1>FoodFoodApp</h1>
        </div>

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
            <Button className="cart" text={"Cart (0)"} onClick={() => {}}/>
        </ul>
        </nav>
    );
    }