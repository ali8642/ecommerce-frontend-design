import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaCaretDown } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import SelectDropdown from "./SelectDropdown";
import { Link } from "react-router-dom";
import OffcanvasSidebar from "./OffcanvasSidebar";

export default function Navbar() {
  const currencies = ["USD", "PKR", "EUR"];
  const support = ["Help", "Chat support", "FAQs"];
  const categories = [
    "All category",
    "Automo/biles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tool/s, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tool/s",
    "More category",
  ];

  return (
    <nav className="w-full border-1 border-gray-200 bg-white">
      <div className="lg:w-[90%] lg:py-4 mx-auto flex justify-between">
        {/* BRAND LOGO */}
        <div className="flex items-center">
          <div className="p-4 block lg:hidden">
            <OffcanvasSidebar />
          </div>
          <Link to="/" className="cursor-pointer">
            <img src="./images/brand/logo-colored.svg" className="w-40" />
          </Link>
        </div>

        {/* SEARCH SECTION */}
        <div className="w-[50%] lg:flex border-3 border-blue-500 rounded-md text-lg hidden">
          <input
            className="px-3 grow border border-blue-500 focus:outline-none"
            type="search"
            placeholder="Search..."
          />
          <div className="border border-blue-500">
            <SelectDropdown options={categories} defaultOption="All category" />
          </div>
          <button className="w-auto p/y-2 px-6 bg-blue-500 cursor-pointer text-white">
            Search
          </button>
        </div>

        {/* NAV-LINKS SECTION */}
        <div className="flex gap-2 lg:gap-6 lg:p-0 p-4">
          <Link
            to="/"
            className="flex flex-col justify-center items-center text-gray-400"
          >
            <FaUserAlt className="text-2xl" />{" "}
            <p className="hidden lg:block">Profile</p>
          </Link>
          <Link
            to="/"
            className="flex flex-col justify-center items-center text-gray-400"
          >
            <MdChat className="text-2xl hidden lg:block" />{" "}
            <p className="hidden lg:block">Message</p>
          </Link>
          <Link
            to="/"
            className="flex flex-col justify-center items-center text-gray-400"
          >
            <FaHeart className="text-2xl hidden lg:block" />{" "}
            <p className="hidden lg:block">Orders</p>{" "}
          </Link>
          <Link
            to="/mycart"
            className="flex flex-col justify-center items-center text-gray-400"
          >
            <FaShoppingCart className="text-2xl" />{" "}
            <p className="hidden lg:block">My cart</p>
          </Link>
        </div>
      </div>

      {/* CATEGORIES BAR SECTION */}
      <div className="w-full border-1 border-gray-200">
        <div className="w-[90%] font-medium text-lg py-4 mx-auto flex lg:justify-between">
          {/* DEALS AND OFFERS SECTION */}
          <div className="w-full lg:w-auto flex gap-6 items-center overflow-x-auto flex-nowrap no-scrollbar">
            <Link
              to="/all-categories"
              className="group flex items-center gap-2 relative cursor-pointer lg:p-0 py-1 px-2 bg-blue-100 text-blue-600 lg:bg-white lg:text-black flex-shrink-0"
            >
              <GiHamburgerMenu className="hidden lg:block" /> All category
            </Link>

            <Link
              to="/all-categories"
              className="bg-blue-100 text-blue-600 px-2 lg:bg-white lg:text-black flex-shrink-0"
            >
              Hot offers
            </Link>

            <Link
              to="/all-categories"
              className="bg-blue-100 text-blue-600 px-2 lg:bg-white lg:text-black flex-shrink-0"
            >
              Gift boxes
            </Link>

            <Link
              to="/all-categories"
              className="bg-blue-100 text-blue-600 px-2 lg:bg-white lg:text-black flex-shrink-0"
            >
              Projects
            </Link>

            <Link
              to="/all-categories"
              className="bg-blue-100 text-blue-600 px-2 lg:bg-white lg:text-black flex-shrink-0"
            >
              Menu item
            </Link>

            <Link
              to="/"
              className="bg-blue-100 text-blue-600 px-2 lg:bg-white lg:text-black flex-shrink-0"
            >
              Help
            </Link>
          </div>

          {/* REGION AND LANGUAGE DROPDOWNS */}
          <div className=" items-center gap-6 hidden lg:flex">
            <SelectDropdown options={currencies} defaultOption="USD" />
            <button className="w-auto flex items-center group relative gap-4 cursor-pointer">
              Ship to <img src="./images/flags/DE.png" width="40px" />{" "}
              <FaCaretDown />
              <div className="w-50 py-2 my-4 bg-white border-1 border-gray-200 shadow-lg rounded-md flex flex-col gap-2 absolute top-full right-0 scale-y-0 group-focus:scale-y-100 group-focus:z-1 origin-top text-right duration-200">
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  Germany <img src="./images/flags/DE.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  UAE <img src="./images/flags/AE.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  Australia <img src="./images/flags/AU.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  China <img src="./images/flags/CN.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  Denmark <img src="./images/flags/DK.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  France <img src="./images/flags/FR.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  UK <img src="./images/flags/GB.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  Italy <img src="./images/flags/IT.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  Russia <img src="./images/flags/RU.png" width="40px" />
                </a>
                <a
                  href=""
                  className="flex gap-4 justify-center hover:bg-gray-100 py-1"
                >
                  US <img src="./images/flags/US.png" width="40px" />
                </a>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
