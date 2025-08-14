import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import HeartLikeButton from "./HeartLikeButton";
import { FaShoppingCart } from "react-icons/fa";

function Card({ product }) {
  return (
    <Link
      to={`/product-details/${product?.id}`}
      className="w-full max-w-[300px] max-h-[500px] shadow-lg rounded border border-gray-300 flex flex-col text-gray-500 hover:scale-105 transform-3d duration-300 cursor-pointer no-scrollbar"
    >
      <div className="w-full border-b border-b-gray-300">
        <img
          src={
            product?.productImages?.[0] ||
            "https://via.placeholder.com/300x200?text=No+Image"
          }
          alt={product?.title || "Product"}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src =
              "https://via.placeholder.com/300x200?text=Image+Not+Found";
          }}
        />
      </div>
      <div className="w-full p-4 flex justify-between">
        <div className="flex-1">
          <h1 className="font-bold text-black text-xl">
            ${product?.prices?.[0]?.amount || "N/A"}
          </h1>
          <StarRating range={product?.rating || 0} />
          <p className="text-lg">
            {product?.title || "Product Name"}
            <br />
            {product?.category || "Category"}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {product?.reviews} reviews • {product?.sold} sold
          </p>
          <br />
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault(); // Prevent navigation when clicking add to cart
              e.stopPropagation();
              // Add your cart logic here
              console.log("Added to cart:", product);
            }}
            className="p-1 text-[#0066FD] cursor-pointer border border-gray-300 rounded flex gap-2 items-center hover:bg-blue-50 transition-colors"
          >
            <FaShoppingCart /> Add to cart
          </button>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault(); // Prevent navigation when clicking heart button
            e.stopPropagation();
          }}
        >
          <HeartLikeButton />
        </div>
      </div>
    </Link>
  );
}

export default Card;
