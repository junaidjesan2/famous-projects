import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
