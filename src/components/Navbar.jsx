import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] ">
        Philadelphia Trossingen
      </h1>
      <ul className="flex hidden">
        <li className="p-4">Acasã</li>
        <li className="p-4">Departamente</li>
        <li className="p-4">Resurse</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={25} />
      </div>
      <div className="fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-800 bg-gradient-to-r from-gray-900 to-gray-700">
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
