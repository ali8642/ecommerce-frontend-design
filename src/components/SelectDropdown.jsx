import React, { useState, useRef, useEffect } from "react";

const SelectDropdown = ({
  options = [],
  defaultOption = "Select",
  direction = "down", // Changed from "Select" to "down" as default
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultOption);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  // Determine positioning classes based on direction
  const menuPositionClass =
    direction === "up" ? "bottom-full mb-1" : "top-full mt-1";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown trigger */}
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 font-medium rounded cursor-pointer hover:bg-gray-50 transition-colors min-w-[120px]"
      >
        <span>{selected}</span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className={`absolute left-0 right-0 ${menuPositionClass} bg-white rounded border border-gray-200 shadow-lg z-50`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer first:rounded-t last:rounded-b"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropdown;
