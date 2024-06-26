import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootPage } from "./pages/RootPage";
import { HomePage } from "./pages/HomePage";
import { RestaurantDetailsPage } from "./pages/RestaurantDetailsPage";
import { SearchPage } from "./pages/SearchPage";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { ProfilePage } from "./pages/ProfilePage";
import { RestaurantsPage } from "./pages/RestaurantsPage";
// import { tokenLoader } from "./util/localstorage.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    // loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/restaurants/:id", element: <RestaurantDetailsPage /> },
      { path: "/restaurants", element: <RestaurantsPage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/register", element: <RegisterPage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/user/:id", element: <ProfilePage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
