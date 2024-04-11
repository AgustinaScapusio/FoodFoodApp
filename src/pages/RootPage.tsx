import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "../component/NavBar";
import { Cart } from "../component/cart/Cart.tsx";
import { useEffect, useState } from "react";
import { getToken, tokenLoader } from "../util/localstorage.ts";
import { useAppDispatch } from "../store";
import { postLogin } from "../http/LoginHttp.tsx";

export function RootPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    tokenLoader()
      .then((token) => {
        setIsLoading(false);
        if (!token) {
          navigate("/login");
        } else {
          let loginState = localStorage.getItem("loginState");
          if (loginState) {
            loginState = JSON.parse(loginState);
          } else {
            loginState = "no token";
          }
          if (loginState) {
            dispatch(
              postLogin.fulfilled(loginState, {
                requestId: "requestId",
                arg: "arg",
              }),
            );
          }
        }
      })
      .catch((error) => {
        console.error(error);
        navigate("/login");
      });
  }, [navigate, dispatch]);

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
