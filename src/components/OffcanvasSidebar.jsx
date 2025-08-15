import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidCategory } from "react-icons/bi";
import { FaBoxArchive, FaBuildingUser, FaRegHeart } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { MdOutlineLanguage, MdOutlineHeadsetMic } from "react-icons/md";

const OffcanvasSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative block lg:hidden">
      {/* Hamburger Icon */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-2xl bg-gray-200 rounded-md"
      >
        <GiHamburgerMenu />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/30 z-40"></div>}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`overflow-y-auto overflow-x-hidden fixed top-0 left-0 w-70 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-start">
          <h2 className="text-lg font-bold">
            <img
              src="./images/user.jpg"
              width="48px"
              className="rounded-full"
            />
            Login | Register
          </h2>
          <button onClick={() => setIsOpen(false)}>✖</button>
        </div>
        <ul className="p-4 space-y-4 text-gray-500">
          <hr />
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <FaHome className="text-2xl" />
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <FaRegHeart className="text-2xl" />
            Products
          </li>
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <BiSolidCategory className="text-2xl" />
            Categories
          </li>
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <FaBoxArchive className="text-2xl" />
            My orders
          </li>
          <hr />
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <MdOutlineLanguage className="text-2xl" />
            English | USD
          </li>
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <MdOutlineHeadsetMic className="text-2xl" />
            Contact
          </li>
          <li className="cursor-pointer hover:text-blue-500 flex gap-4 items-center">
            <FaBuildingUser className="text-2xl" />
            About
          </li>
          <hr />
          <li className="cursor-pointer hover:text-blue-500 relative left-10">
            User agreement
          </li>
          <li className="cursor-pointer hover:text-blue-500 relative left-10">
            Partnership
          </li>
          <li className="cursor-pointer hover:text-blue-500 relative left-10">
            Privacy policy
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OffcanvasSidebar;
