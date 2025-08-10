import React from "react";
import Discount from "../components/Discount.jsx";
import { Routes, Route } from "react-router";
import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { FaArrowLeft, FaTruck } from "react-icons/fa";
import { MdChat } from "react-icons/md";
import { IoIosLock } from "react-icons/io";

const MyCart = () => {
  return (
    <div className="w-full py-4 bg-[#F6FAFD] flex flex-col items-center gap-4">
      <div className="w-[90%]">
        <h1 className="font-bold text-2xl flex-grow">My cart (3)</h1>
      </div>

      {/* ADDED TO CART */}
      <div className="w-[90%] flex justify-between items-center">
        {/* ITEMS SECTION */}
        <div className="w-[70%] p-4 border border-gray-300 rounded bg-white flex flex-col items-center">
          {/* ITEM 1 */}
          <div className="w-full border-b-1 border-gray-300 py-2 gap-4 flex flex-row items-center justify-between">
            <div className="rounded border-2 border-gray-300">
              <img src="./images/cloth/1.jpg" alt="" width="100px" />
            </div>
            <div className="grow">
              <h1 className="text-lg font-medium">
                T-shirt with multiple colors, for men and lady
              </h1>
              <p className="text-md">
                Size: medium, Color: blue, Material: Plastic <br /> Seller:
                Artel Market
              </p>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-red-500 cursor-pointer"
              >
                Remove
              </button>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-blue-500 cursor-pointer"
              >
                Save for later
              </button>
            </div>
            <div>
              <h1 className="text-lg font-medium my-2">$78.99</h1>
              <p className="border-2 border-gray-300 p-2">
                Qty:
                <select name="Qty" className="w-8 outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="w-full border-b-1 border-gray-300 py-2 gap-4 flex flex-row items-center justify-between">
            <div className="rounded border-2 border-gray-300">
              <img src="./images/cloth/5.jpg" alt="" width="100px" />
            </div>
            <div className="grow">
              <h1 className="text-lg font-medium">
                Fashion BackPack with multiple colors, for men and lady
              </h1>
              <p className="text-md">
                Size: medium, Color: blue, Material: Leather <br /> Seller: Best
                Factory LLC
              </p>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-red-500 cursor-pointer"
              >
                Remove
              </button>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-blue-500 cursor-pointer"
              >
                Save for later
              </button>
            </div>
            <div>
              <h1 className="text-lg font-medium my-2">$78.99</h1>
              <p className="border-2 border-gray-300 p-2">
                Qty:
                <select name="Qty" className="w-8 outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="w-full border-b-1 border-gray-300 py-2 gap-4 flex flex-row items-center justify-between">
            <div className="rounded border-2 border-gray-300">
              <img src="./images/interior/6.jpg" alt="" width="100px" />
            </div>
            <div className="grow">
              <h1 className="text-lg font-medium">
                Premium Quality Lamp for Bedrooms
              </h1>
              <p className="text-md">
                Size: medium, Color: blue, Material: Ceramic <br /> Seller:
                Artel Market
              </p>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-red-500 cursor-pointer"
              >
                Remove
              </button>
              <button
                type="submit"
                className="border py-1 px-2 m-2 border-gray-300 rounded text-blue-500 cursor-pointer"
              >
                Save for later
              </button>
            </div>
            <div>
              <h1 className="text-lg font-medium my-2">$78.99</h1>
              <p className="border-2 border-gray-300 p-2">
                Qty:
                <select name="Qty" className="w-8 outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
            </div>
          </div>
          <div className="w-full mt-2 flex justify-between items-center">
            <Link to="/">
              <button
                type="submit"
                className="border py-1 px-2 m-2 text-lg font-bold text-white bg-blue-500 rounded cursor-pointer flex items-center gap-2"
              >
                <FaArrowLeft /> Back to shop
              </button>
            </Link>
            <button
              type="submit"
              className="border py-1 px-2 m-2 text-lg font-bold border-gray-300 rounded text-red-500 cursor-pointer"
            >
              Remove all
            </button>
          </div>
        </div>

        {/* CHECKOUT SECTION */}
        <div className="w-[28%] flex flex-col items-center gap-4">
          {/* COUPON */}
          <div className="w-full bg-white p-4 border border-gray-300 rounded">
            <h1 className="text-lg mb-4">Have a coupon?</h1>
            <button
              type="submit"
              className="w-full text-lg font-bold flex items-center border-2 border-gray-300 rounded-md text-blue-500 cursor-pointer"
            >
              <input
                type="text"
                name="coupon"
                className="text-gray-500 text-lg font-medium p-2 mr-6 float-left border border-gray-300 focus:outline-none"
                placeholder="Add coupon"
              />
              Apply
            </button>
          </div>

          {/* PAYMENT */}
          <div className="w-full bg-white p-4 border border-gray-300 rounded">
            <p className="flex justify-between items-center text-lg">
              Subtotal: <b>$1403.97</b>
            </p>
            <p className="flex justify-between items-center text-lg">
              Discount: <b className="text-red-500">- $60.00</b>
            </p>
            <p className="flex justify-between items-center text-lg">
              Tax: <b className="text-green-500">+ $14.00</b>
            </p>
            <br />
            <hr className="text-gray-300" />
            <br />
            <p className="flex justify-between items-center text-lg font-medium">
              Total: <b>$1357.97</b>
            </p>
            <button
              type="submit"
              className="w-full mt-2 py-2 text-white bg-[#00B518] text-xl rounded-lg cursor-pointer"
            >
              Checkout
            </button>
            <br />
            <img
              src="../../images/payment-methods.jpg"
              className="w-auto mt-2"
            />
          </div>
        </div>
      </div>

      {/* PROS OF SERVICES SECTION */}
      <div className="w-[90%] p-4 flex gap-12">
        <div className="flex items-center gap-2">
          <IoIosLock className="w-14 h-14 p-2 text-4xl rounded-full bg-gray-300 text-gray-500" />
          <p className="flex flex-col">
            <h1 className="text-xl font-medium">Secure payment</h1>
            Have you ever finally just
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdChat className="w-14 h-14 p-2 text-4xl rounded-full bg-gray-300 text-gray-500" />
          <p className="flex flex-col">
            <h1 className="text-xl font-medium">Customer Support</h1>
            Have you ever finally just
          </p>
        </div>
        <div className="flex items-center gap-2">
          <FaTruck className="w-14 h-14 p-2 text-4xl rounded-full bg-gray-300 text-gray-500" />
          <p className="flex flex-col">
            <h1 className="text-xl font-medium">Free Delivery</h1>
            Have you ever finally just
          </p>
        </div>
      </div>

      {/* CARD ITEMS */}
      <div className="w-[90%] bg-white p-4 border border-gray-300 rounded mx-auto flex gap-4 flex-col items-center">
        <div className="w-full">
          <h1 className="w-full font-bold text-xl float-left">
            Saved for later
          </h1>
        </div>

        <div className="w-full flex justify-between items-center">
          <Card
            productImage="./images/tech/2.jpg"
            productPrice="$271"
            productDetail="Xiaomi Pad 5 (6GB - 256GB)"
            productType="Tablet - Blue"
            productRating="4.8"
            className="border-none"
          />
          <Card
            productImage="./images/tech/4.jpg"
            productPrice="$179.39"
            productDetail="iPhone 14 148GB"
            productType="Mobile - Blue"
            productRating="4.0"
          />
          <Card
            productImage="./images/tech/8.jpg"
            productPrice="$35.99"
            productDetail="Huawei Watch 3 Classic"
            productType="Smart Watch - Gray"
            productRating="4.2"
          />
          <Card
            productImage="./images/tech/7.jpg"
            productPrice="$746.35"
            productDetail="HUAWEI MateBook D 16"
            productType="Laptop - Gray"
            productRating="4.3"
          />
        </div>
      </div>
      <Discount />
    </div>
  );
};

export default MyCart;
