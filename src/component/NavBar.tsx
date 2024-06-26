import { Link } from "react-router-dom";
import logo from "../assets/vectorstock_46110475_transparent.png";
import { useAppDispatch, useAppSelector } from "../store";
import "./NavBar.css";
import { toggleVisibility } from "../store/userProgressSlice.tsx";
import { signOut } from "../store/loginSlice.tsx";

export default function NavBar() {
  const { accessToken,userId } = useAppSelector((state) => state.auth);
  const { data } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const total = data.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0,
  );

  const cartItems = useAppSelector((state) => state.cart.data);

  const modalDispatch = useAppDispatch();

  function handleClick() {
    modalDispatch(toggleVisibility());
    console.log(cartItems);
  }

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
          {accessToken &&
          <li>
            <Link to={`/user/${userId}`}>Profile</Link>
          </li>
          }
          {accessToken ? (
            <li>
              <button className={"text-white hover:text-[#35E1FF]"} onClick={() => dispatch(signOut())}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          { accessToken &&
          <button
            className="cart"
            onClick={handleClick}
          >{`Cart (${total})`}</button>
          }
        </ul>
      </div>
    </nav>
  );
}
