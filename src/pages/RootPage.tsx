import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
import { Cart } from "../component/cart/Cart.tsx";

export function RootPage() {
  return (
    <>
      <NavBar />
      <main>
        <Cart />
        <Outlet />
      </main>
    </>
  );
}
