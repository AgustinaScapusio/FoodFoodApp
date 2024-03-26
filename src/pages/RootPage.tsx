import { Outlet } from "react-router-dom";
import NavBar from "../component/NavBar";
export function RootPage() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
