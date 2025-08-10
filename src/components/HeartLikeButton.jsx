import { useState } from "react";

export default function HeartLikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="w-8 h-8 flex items-center justify-center">
      <button
        onClick={handleClick}
        className="p-1 rounded border border-gray-300 transition-colors"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isLiked ? "#ec4899" : "#0067FC"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-colors"
        >
          <path
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            fill={isLiked ? "#ec4899" : "none"}
          />
        </svg>
      </button>
    </div>
  );
}
