import { Link } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

import { useState } from "react";

export default function Header() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <CiMenuFries
        className="absolute h-10 w-10 font-bold"
        onClick={() => setOpenModal(true)}
      />
      <div>
        {openModal && (
          <div className="bg-slate-500 text-end text-white px-5 py-6 flex flex-col absolute h-screen w-2/12 place-self-start">
            <p onClick={() => setOpenModal(false)}>
              <IoClose />
            </p>
            <Link
              className="py-2 px-4 text-center hover:underline "
              to="/rating"
            >
              Rating
            </Link>
            <Link className="py-2 px-4 text-center hover:underline " to="/">
              Random Color
            </Link>
            <Link className="py-2 px-4 text-center hover:underline " to="/load">
              Load Data
            </Link>
            <Link className="py-2 px-4 text-center hover:underline " to="/qr">
              QR Generator
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
