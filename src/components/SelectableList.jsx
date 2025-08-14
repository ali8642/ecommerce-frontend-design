import React, { useState } from "react";

const SelectableList = ({ items = [], onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    if (onSelect) onSelect(item);
  };

  return (
    <div className=" flex-col gap-1 text-lg hidden lg:flex">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => handleSelect(item)}
          className={`px-4 py-2 text-left w-60 rounded-md transition-colors
            ${
              selected === item
                ? "bg-blue-200 font-bold border-blue-200"
                : "bg-white text-gray-700  hover:bg-gray-100"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default SelectableList;
