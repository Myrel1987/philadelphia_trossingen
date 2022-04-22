import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-2xl font-bold text-[#00df9a] ">
        Philadelphia Trossingen
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">Acasã</li>
        <li className="p-4">Departamente</li>
        <li className="p-4">Resurse</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-gradient-to-r from-gray-900 to-gray-700 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-[#00c788] ">
          Philadelphia Trossingen
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600 text-[#00df9a]">Acasã</li>
          <li className="p-4 border-b border-gray-600 text-[#00df9a]">
            Departamente
          </li>
          <li className="p-4 border-b border-gray-600 text-[#00df9a]">
            Resurse
          </li>
          <li className="p-4 border-b border-gray-600 text-[#00df9a]">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
