import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";

export default function Layout() {
  return (
    <div className="w-3/4 mx-auto">
      <Header />
      <div className="px-10 mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
