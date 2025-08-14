import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import SelectDropdown from "./SelectDropdown.jsx";

export default function Footer() {
  const langs = ["English", "اردو"];

  return (
    <footer>
      {/* FOOT LINKS SECTION */}
      <div className="w-full bg-white hidden lg:block">
        <div className="w-[90%] py-8 mx-auto flex justify-between">
          <div className="flex gap-2 flex-col">
            <img src="./images/brand/logo-colored.svg" className="w-40" />
            <h5 className="text-lg">
              Best information about the company
              <br />
              gies here but now lorem ipsum is
            </h5>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                className="p-2 text-lg rounded-full text-center bg-gray-300 text-white cursor:pointer"
                target="_blank"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://www.x.com"
                className="p-2 text-lg rounded-full text-center bg-gray-300 text-white cursor:pointer"
                target="_blank"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com"
                className="p-2 text-lg rounded-full text-center bg-gray-300 text-white cursor:pointer"
                target="_blank"
              >
                <FaLinkedinIn className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com"
                className="p-2 text-lg rounded-full text-center bg-gray-300 text-white cursor:pointer"
                target="_blank"
              >
                <TiSocialInstagram className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com"
                className="p-2 text-lg rounded-full text-center bg-gray-300 text-white cursor:pointer"
                target="_blank"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <a href="" className="text-gray-500 text-lg">
              About Us
            </a>
            <a href="" className="text-gray-500 text-lg">
              Find store
            </a>
            <a href="" className="text-gray-500 text-lg">
              Categories
            </a>
            <a href="" className="text-gray-500 text-lg">
              Blogs
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <a href="" className="text-gray-500 text-lg">
              About Us
            </a>
            <a href="" className="text-gray-500 text-lg">
              Find store
            </a>
            <a href="" className="text-gray-500 text-lg">
              Categories
            </a>
            <a href="" className="text-gray-500 text-lg">
              Blogs
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <a href="" className="text-gray-500 text-lg">
              About Us
            </a>
            <a href="" className="text-gray-500 text-lg">
              Find store
            </a>
            <a href="" className="text-gray-500 text-lg">
              Categories
            </a>
            <a href="" className="text-gray-500 text-lg">
              Blogs
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">About Us</h3>
            <a href="" className="text-gray-500 text-lg">
              About Us
            </a>
            <a href="" className="text-gray-500 text-lg">
              Find store
            </a>
            <a href="" className="text-gray-500 text-lg">
              Categories
            </a>
            <a href="" className="text-gray-500 text-lg">
              Blogs
            </a>
          </div>

          <div>
            <h3 className="font-bold text-lg">Get app</h3>
            <img src="./images/stores.png" width="150" />
          </div>
        </div>
      </div>

      {/* FOOT END SECTION */}
      <div className="w-full py-2 bg-[#EEF2F5]">
        <div className="w-[90%] mx-auto flex justify-between items-center">
          <p>&copy; 2023 Ecommerce.</p>
          <SelectDropdown
            options={langs}
            defaultOption="English"
            direction="up"
          />
        </div>
      </div>
    </footer>
  );
}
