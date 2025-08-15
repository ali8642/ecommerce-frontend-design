import React from "react";
import { IoMailOutline } from "react-icons/io5";

export default function Newsletter() {
  return (
    <div className="w-full bg-[#EEF2F5] p-8 ">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-2xl font-medium">Subscribe on our newsletter</h3>
        <p className="text-lg">
          Get daily news on upcoming offers from many suppliers all over the
          world
        </p>
      </div>
      <div className="relative w-auto flex gap-4 lg:justify-center lg:flex-row flex-col">
        <IoMailOutline className="text-2xl text-gray-500 relative lg:top-3 lg:left-12 left-1.5 top-13" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="bg-white border border-gray-200 px-8 py-2 text-lg rounded-md focus:outline-none"
        />
        <button
          type="submit"
          className="w-auto py-2 px-4 bg-blue-500 cursor-pointer text-white rounded-md text-lg"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
}
