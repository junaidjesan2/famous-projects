import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";

export default function Layout() {
  return (
    <div>
      <div className="w-44">
        <Header />
      </div>
      <div className=" ml-44 px-10">
        <Outlet />
      </div>
    </div>
  );
}
