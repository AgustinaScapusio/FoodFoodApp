import { Link } from "react-router-dom";
import logo from "../assets/vectorstock_46110475_transparent.png";
import Button from "./Button";
import { useAppSelector } from "../store/index";

import "./NavBar.css";
export default function NavBar() {
  const { data } = useAppSelector((state) => state.cart);
  const total = data.reduce((acc: number, item: { quantity: number; }) => acc + item.quantity, 0);
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="logo" />
        <h1 className={"text-zinc-300"}>FoodFood</h1>
      </div>
      <div className="navbar-list">
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
          <Button className="cart" text={`Cart (${total})`} onClick={() => {}} />
        </ul>
      </div>
    </nav>
  );
}
