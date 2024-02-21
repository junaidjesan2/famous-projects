import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="my-5 font-bold">
        <Link className="py-3 px-4 text-center rounded-lg bg-yellow-300 mr-3" to="/demo">demo</Link>
        <Link className="py-3 px-4 text-center rounded-lg bg-yellow-300 mr-3" to="/">Random Color</Link>
    </div>
  );
}
