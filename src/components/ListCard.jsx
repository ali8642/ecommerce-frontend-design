import React from "react";
import { Link } from "react-router-dom";
import StarRating from "./StarRating";
import HeartLikeButton from "./HeartLikeButton";

const ListCard = ({ product }) => {
  return (
    <Link
      to={`/product-details/${product.id}`}
      className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer block"
    >
      <div className="flex p-4 relative">
        <div className="flex-shrink-0 w-20 h-20 mr-4">
          <img
            src={product.productImages[0]}
            alt={product.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-1 pr-8">
              {product.title} - {product.type}
            </h3>
            <div
              className="absolute top-4 right-4"
              onClick={(e) => {
                e.preventDefault(); // Prevent navigation when clicking heart button
                e.stopPropagation();
              }}
            >
              <HeartLikeButton />
            </div>
          </div>
          <div className="mb-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.prices[0].amount}.00
            </span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <StarRating range={product.rating} />
            <span className="text-sm text-gray-500">
              {product.reviews} orders
            </span>
          </div>
          <div className="text-xs text-green-600 mb-2">Free Shipping</div>
          <p className="text-xs text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
          <button
            onClick={(e) => {
              e.preventDefault(); // This will be handled by the Link wrapper
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
