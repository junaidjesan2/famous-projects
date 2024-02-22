import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="my-5">
        <Link className="py-2 px-4 text-center hover:underline mr-3" to="/rating">Rating</Link>
        <Link className="py-2 px-4 text-center hover:underline mr-3" to="/">Random Color</Link>
        <Link className="py-2 px-4 text-center hover:underline mr-3" to="/load">Load Data</Link>
    </div>
  );
}
