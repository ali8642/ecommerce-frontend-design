import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter.jsx";
import Countdown from "../components/Countdown.jsx";
import SelectableList from "../components/SelectableList.jsx";
import { IoIosSearch, IoMdSend } from "react-icons/io";
import { FaBoxesPacking } from "react-icons/fa6";
import { GiCheckedShield } from "react-icons/gi";
import CountryList from "../components/CountryList.jsx";
import productDetailsData from "../data/productDetails.js";

// Helper to filter products by category (case-insensitive)
const getProductsByCategory = (category, limit = null) => {
  const filtered = productDetailsData.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );
  return limit ? filtered.slice(0, limit) : filtered;
};

// Helper to get random discount %
const getRandomDiscount = () => Math.floor(Math.random() * 40) + 10;

const Home = () => {
  const deals = getProductsByCategory("Computer and tech", 5);
  const homeOutdoor = getProductsByCategory("Home interiors", 8);
  const electronics = getProductsByCategory("Computer and tech", 8);
  const recommended = productDetailsData.slice(0, 10);

  return (
    <>
      {/* HERO SECTION */}
      <div className="w-[90%] h-115 items-center min-h-[300px] my-4 mx-auto lg:p-4 bg-white border-2 border-gray-300 rounded flex flex-col gap-4 lg:flex-row">
        {/* CATEGORIES SECTION */}
        <SelectableList
          className="lg:w-[30%]"
          items={[
            "Automobiles",
            "Clothes and Wear",
            "Home interiors",
            "Computer and tech",
            "Tools, equipments",
            "Sports and outdoor",
            "Animal and pets",
            "Machinery tools",
            "More category",
          ]}
        />

        {/* BANNER */}
        <div className="lg:w-[60%] w-[100%] h-full py-24 px-12 bg-[url(./public/images/Banner-board.png)] bg-cover bg-no-repeat bg-center">
          <p className="lg:text-[2rem] text-xl">
            Latest trending <br /> <b>Electronic items</b>
          </p>
          <button
            type="submit"
            className="text-lg font-medium py-2 px-4 bg-white border border-gray-300 rounded-lg mt-2 cursor-pointer"
          >
            Learn more
          </button>
        </div>

        {/* USER BOX */}
        <div className="lg:w-[20%] hidden lg:flex w-full flex-col gap-2">
          <div className="text-lg flex gap-2 flex-col bg-blue-200 p-2 rounded-md">
            <p className="flex gap-2 items-center  font-medium">
              <img
                src="./images/user.jpg"
                className="rounded-full"
                width="60px"
              />
              Hi, user <br /> Let's get started
            </p>
            <button
              type="submit"
              className="w-full py-2 cursor-pointer text-white bg-blue-600 rounded-md"
            >
              Join now
            </button>
            <button
              type="submit"
              className="w-full py-2 cursor-pointer bg-white text-blue-600 border border-gray-300 rounded-md"
            >
              Login
            </button>
          </div>

          <p className="text-xl p-4 bg-orange-500 rounded-md text-white">
            Get US &10 off <br /> with a new <br /> supplier
          </p>
          <p className="text-xl p-4 bg-[#56BDC4] rounded-md text-white">
            Send quotes with <br /> supplier <br /> preferences
          </p>
        </div>
      </div>

      {/* DEALS AND DISCOUNTS SECTION */}
      <div className="w-[90%] h-auto mx-auto my-4 text-lg lg:flex lg:justify-center bg-white border border-gray-300 rounded">
        <div className="p-4 md:w-full max-w-80 min-h-30 max-h-45 flex justify-between lg:flex-col flex-wrap">
          <h1 className="text-xl font-bold">
            Deals and offers
            <p className="text-lg text-gray-500 mb-2">Hygiene equipments</p>
          </h1>

          <Countdown duration={"2025-08-15"} />
        </div>

        <div className="overflow-x-auto no-scrollbar flex md:mt-4 lg:mt-0 md:border-t border-gray-300">
          <div className="min-w-50 flex flex-col items-center cursor-pointer gap-1 border-x rounded p-3 border-gray-300">
            <img
              src="./images/tech/8.jpg"
              width="180px"
              className="hover:scale-105 duration-200"
            />
            <h1>Smart watches</h1>
            <p className="py-1 px-3 rounded-full bg-red-300 text-red-600">
              -25%
            </p>
          </div>

          <div className="min-w-50 flex flex-col items-center cursor-pointer gap-1 border-x rounded p-3 border-gray-300">
            <img
              src="./images/tech/7.jpg"
              width="180px"
              className="hover:scale-105 duration-200"
            />
            <h1>Laptops</h1>
            <p className="py-1 px-3 rounded-full bg-red-300 text-red-600">
              -15%
            </p>
          </div>

          <div className="min-w-50 flex flex-col items-center cursor-pointer gap-1 border-x rounded p-3 border-gray-300">
            <img
              src="./images/tech/6.jpg"
              width="180px"
              className="hover:scale-105 duration-200"
            />
            <h1>Canon cameras</h1>
            <p className="py-1 px-3 rounded-full bg-red-300 text-red-600">
              -40%
            </p>
          </div>

          <div className="min-w-50 flex flex-col items-center cursor-pointer gap-1 border-x rounded p-3 border-gray-300">
            <img
              src="./images/tech/5.jpg"
              width="180px"
              className="hover:scale-105 duration-200"
            />
            <h1>Headphones</h1>
            <p className="py-1 px-3 rounded-full bg-red-300 text-red-600">
              -25%
            </p>
          </div>

          <div className="min-w-50 flex flex-col items-center cursor-pointer gap-1 border-x rounded p-3 border-gray-300">
            <img
              src="./images/tech/3.jpg"
              width="180px"
              className="hover:scale-105 duration-200"
            />
            <h1>Mobile phones</h1>
            <p className="py-1 px-3 rounded-full bg-red-300 text-red-600">
              -25%
            </p>
          </div>
        </div>
      </div>

      {/* HOME AND OUTDOOR SECTION */}
      <div className="w-[90%] h-full border border-gray-300 rounded mx-auto bg-white my-4 flex lg:flex-stretch  flex-col lg:flex-row">
        <div className="text-lg lg:w-[25%] md:w-full py-12 px-8 bg-[url(./public/images/92.png)] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl font-bold">
            Home and <br />
            outdoor
          </h1>
          <button
            type="submit"
            className="text-lg font-medium py-2 px-4 bg-white border border-gray-300 rounded-lg mt-2 cursor-pointer"
          >
            Source now
          </button>
        </div>

        {/* ITEM LISTS */}
        <div className="lg:w-[75%] md:w-full overflow-x-auto no-scrollbar h-full flex lg:flex-wrap text-lg">
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Soft chairs</h1>
            <p className="flex justify-between">
              From <br /> USD 19{" "}
              <img
                src="./images/interior/1.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Lamps</h1>
            <p className="flex justify-between">
              From <br /> USD 09{" "}
              <img
                src="./images/interior/6.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Air beds</h1>
            <p className="flex justify-between">
              From <br /> USD 13{" "}
              <img
                src="./images/interior/5.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Clay curd pots</h1>
            <p className="flex justify-between">
              From <br /> USD 06{" "}
              <img
                src="./images/interior/3.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Angel Juicer</h1>
            <p className="flex justify-between">
              From <br /> USD 18{" "}
              <img
                src="./images/interior/9.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Coffe Capsule Machine</h1>
            <p className="flex justify-between">
              From <br /> USD 29{" "}
              <img
                src="./images/interior/8.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Book Holder</h1>
            <p className="flex justify-between">
              From <br /> USD 07{" "}
              <img
                src="./images/interior/7.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Potted plants</h1>
            <p className="flex justify-between">
              From <br /> USD 06{" "}
              <img
                src="./images/interior/4.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
        </div>
      </div>

      {/* ELECTRONICS AND GADGETS SECTION */}
      <div className="w-[90%] border border-gray-300 rounded mx-auto h-full bg-white my-4 flex lg:flex-stretch lg:flex-row flex-col">
        <div className="text-lg lg:w-[25%] md:w-full py-12 px-8 bg-[url(/public/images/98.png)] bg-cover bg-center bg-no-repeat">
          <h1 className="text-2xl font-bold">
            Consumer <br />
            electronics and <br />
            gadgets
          </h1>
          <button
            type="submit"
            className="text-lg font-medium py-2 px-4 bg-white border border-gray-300 rounded-lg mt-2 cursor-pointer"
          >
            Source now
          </button>
        </div>

        {/* ITEM LISTS */}
        <div className="lg:w-[75%] md:w-full overflow-x-auto h-full flex lg:flex-wrap text-lg">
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Smart watches</h1>
            <p className="flex justify-between">
              From <br /> USD 19{" "}
              <img
                src="./images/tech/8.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Cameras</h1>
            <p className="flex justify-between">
              From <br /> USD 89{" "}
              <img
                src="./images/tech/6.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Headphones</h1>
            <p className="flex justify-between">
              From <br /> USD 10{" "}
              <img
                src="./images/tech/9.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Gaming set</h1>
            <p className="flex justify-between">
              From <br /> USD 35{" "}
              <img
                src="./images/tech/5.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Laptops & PC</h1>
            <p className="flex justify-between">
              From <br /> USD 340{" "}
              <img
                src="./images/tech/7.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Smart Phones</h1>
            <p className="flex justify-between">
              From <br /> USD 85{" "}
              <img
                src="./images/tech/1.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Tablets</h1>
            <p className="flex justify-between">
              From <br /> USD 129{" "}
              <img
                src="./images/tech/2.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
          <div className="lg:w-[25%] min-w-45 flex flex-col py-3 px-2 gap-2 border border-gray-300 cursor-pointer">
            <h1 className="font-medium text-xl">Electric kettle</h1>
            <p className="flex justify-between">
              From <br /> USD 79{" "}
              <img
                src="./images/tech/10.jpg"
                width="80px"
                className="hover:scale-110 duration-300"
              />
            </p>
          </div>
        </div>
      </div>

      {/* SEND QUOTE SECTION */}
      <div className="w-[90%] h-full rounded mx-auto my-4 flex flex-stretch bg-no-repeat bg-cover bg-[url(./images/102.png)]">
        <div className="w-full bg-gradient-to-r from-blue-600/80 to-blue-200/80 flex lg:items-stretch lg:flex-row flex-col h-full justify-between">
          <div className="text-white lg:w-[50%] w-full py-8 px-12">
            <h1 className="text-[2rem] font-medium">
              An easy way to send <br /> requests to all suppliers
            </h1>
            <br />
            <p className="text-xl lg:block hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
              quis? Sed, corporis ullam velit dicta ipsam dolorem sunt
              perferendis adipisci, pariatur, cum explicabo blanditiis laborum!
              Sunt quos modi cum blanditiis.
            </p>
            <br />
            <button
              type="submit"
              className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer lg:hidden block"
            >
              Send inquiry
            </button>
          </div>

          {/* FORM */}
          <div className="lg:w-[50%] h-full p-8 lg:block hidden">
            <div className="w-full h-full py-6 px-4 bg-white border border-gray-300 rounded-lg flex flex-col items-start gap-4">
              <h2 className="text-xl font-medium">Send quote to suppliers</h2>
              <input
                type="text"
                value="What item you need?"
                placeholder="Type the item name"
                className="border border-gray-300 p-2 rounded w-md"
              />
              <textarea
                name="details"
                placeholder="Type more details"
                className="border border-gray-300 p-2 rounded w-md"
              ></textarea>
              <p className="flex gap-4 items-center">
                <b className="border border-gray-300 p-2 rounded w-[12rem]">
                  Quantity
                </b>
                <select
                  name="quantity"
                  className="border border-gray-300 p-2 rounded w-[6-rem] focus:outline-none"
                >
                  <option value="Pcs">Pcs</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </p>
              <button
                type="submit"
                className="py-2 px-4 bg-blue-500 text-white rounded-md cursor-pointer"
              >
                Send inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RECOMMENDED ITEMS SECTION */}
      <div className="w-[90%] h-full mx-auto my-4 flex flex-col gap-4">
        <h1 className="text-2xl">
          <b>Recommended items</b>
        </h1>
        {/* CARDS */}
        <div className="w-full flex lg:flex-wrap lg:justify-between gap-4 overflow-x-auto lg:overflow-hidden py-4">
          {recommended.map((product) => (
            <Link
              key={product.id}
              to={`/product-details/${product.id}`}
              className="w-[18%] p-4 bg-white min-w-60 rounded-md border-2 border-gray-300 hover:scale-105 duration-300 cursor-pointer hover:shadow"
            >
              <img
                src={product.productImages[0]}
                alt={product.title}
                width="100%"
              />
              <b className="text-lg">${product.prices[0].amount}</b>
              <p className="text-gray-500">{product.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* OUR EXTRA SEVICES */}
      <div className="w-[90%] mx-auto my-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Our extra services</h1>

        {/* CARDS */}
        <div className="w-full flex lg:justify-between lg:flex-row items-center md:flex-col gap-4">
          <div className="lg:w-[24%] w-[80%] rounded-md border border-gray-300 bg-white hover:scale-105 duration-300 hover:shadow cursor-pointer">
            <img src="./images/108.png" width="100%" />
            <p className="p-4 flex justify-between text-lg font-medium">
              Source from Industry Hubs
              <IoIosSearch className="w-12 h-12 border border-white rounded-full text-[2rem] p-2 bg-[#D1E7FF] relative bottom-10" />
            </p>
          </div>

          <div className="lg:w-[24%] w-[80%] rounded-md border border-gray-300 bg-white hover:scale-105 duration-300 hover:shadow cursor-pointer">
            <img src="./images/104.png" width="100%" />
            <p className="p-4 flex justify-between text-lg font-medium">
              Customize your products
              <FaBoxesPacking className="w-12 h-12 border border-white rounded-full text-[2rem] p-2 bg-[#D1E7FF] relative bottom-10" />
            </p>
          </div>

          <div className="lg:w-[24%] w-[80%] rounded-md border border-gray-300 bg-white hover:scale-105 duration-300 hover:shadow cursor-pointer">
            <img src="./images/106.png" width="100%" />
            <p className="p-4 flex justify-between text-lg font-medium">
              Fast, reliable shipping by ocean or air
              <IoMdSend className="w-12 h-12 border border-white rounded-full text-[2rem] p-2 bg-[#D1E7FF] relative bottom-10" />
            </p>
          </div>

          <div className="lg:w-[24%] w-[80%] rounded-md border border-gray-300 bg-white hover:scale-105 duration-300 hover:shadow cursor-pointer">
            <img src="./images/107.png" width="100%" />
            <p className="p-4 flex justify-between text-lg font-medium">
              Product monitoring and inspection
              <GiCheckedShield className="w-12 h-12 border border-white rounded-full text-[2rem] p-2 bg-[#D1E7FF] relative bottom-10" />
            </p>
          </div>
        </div>
      </div>

      {/* SUPPLIERS BY REGION */}
      <div className="w-[90%] mx-auto my-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Our extra services</h1>

        {/* CARDS */}
        <div className="w-full flex justify-between items-center">
          <CountryList />
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Home;
