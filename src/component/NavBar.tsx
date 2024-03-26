import { Link } from "react-router-dom";
import logo from "../assets/vectorstock_46110475_transparent.png";
import { useAppSelector } from "../store";
import "./NavBar.css";
// import {Cart} from "./cart/Cart";

// import { useState } from "react";
export default function NavBar() {
  // const [open, setOpen] = useState(false);
  const { data } = useAppSelector((state) => state.cart);
  const total = data.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );
  // const openModalHandler = () => {
  //   const modal = document.querySelector(".modal");
  //   modal?.classList.add("open");
  //   setOpen(true);
  // };

  // const closeModalHandler = () => {
  //   const modal = document.querySelector(".modal");
  //   modal?.classList.remove("open");
  //   setOpen(false);
  const cartItems = useAppSelector((state) => state.cart.data);

  function handleClick() {
    console.log(cartItems);
  }

  // }
  return (
    <nav className="navbar">
      {/* {open && <Cart closeModal={closeModalHandler} />} */}
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
          <button
            className="cart"
            onClick={handleClick}
          >{`Cart (${total})`}</button>
        </ul>
      </div>
    </nav>
  );
}
