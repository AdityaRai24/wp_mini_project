import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border border-b-2 drop-shadow-lg flex items-center justify-between p-5">
      <h1 className="font-bold text-3xl pl-10">
        <Link to={'/'}>Quizzify</Link>
      </h1>
      <h1 className="pr-10 cursor-pointer">
      <Link to={'/'}>Home</Link>

      </h1>
    </div>
  );
};

export default Navbar;
