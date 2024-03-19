import {Link} from 'react-router-dom';
export default function NavBar() {
    return (
        <nav>
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