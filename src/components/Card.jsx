import React from "react";
import StarRating from "./StarRating";
import HeartLikeButton from "./HeartLikeButton";
import { FaShoppingCart } from "react-icons/fa";

function Card(props) {
  return (
    <div className="w-[300px] shadow-lg rounded border border-gray-300 flex flex-col text-gray-500 hover:scale-105 transform-3d duration-300 cursor-pointer">
      <div className="w-full border-b border-b-gray-300">
        <img src={props.productImage} alt="productImg" width="300px" />
      </div>
      <div className="w-full p-4 flex justify-between">
        <div>
          <h1 className="font-bold text-black text-xl">{props.productPrice}</h1>
          <StarRating range={props.productRating} />
          <p className="text-lg">
            {props.productDetail}
            <br />
            {props.productType}
          </p>
          <br />
          <button
            type="submit"
            className="p-1 text-[#0066FD] cursor-pointer border border-gray-300 rounded flex gap-2 items-center"
          >
            <FaShoppingCart /> Add to cart
          </button>
        </div>
        <div>
          <HeartLikeButton />
        </div>
      </div>
    </div>
  );
}

export default Card;
