import React from "react";

const StarRating = ({ range = 0, maxStars = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    let starType;

    if (i <= range) {
      // Full star
      starType = "full";
    } else if (i - 0.5 <= range) {
      // Half star
      starType = "half";
    } else {
      // Empty star
      starType = "empty";
    }

    stars.push(
      <span key={i} className="relative inline-block text-2xl">
        {starType === "full" && <span className="text-yellow-400">★</span>}
        {starType === "half" && (
          <span className="relative">
            <span className="text-gray-300">★</span>
            <span
              className="absolute top-0 left-0 text-yellow-400 overflow-hidden"
              style={{ width: "50%" }}
            >
              ★
            </span>
          </span>
        )}
        {starType === "empty" && <span className="text-gray-300">★</span>}
      </span>
    );
  }

  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-2 text-sm text-gray-600">
        {range} / {maxStars}
      </span>
    </div>
  );
};

export default StarRating;
