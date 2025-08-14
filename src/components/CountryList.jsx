import React from "react";

const countries = [
  {
    name: "Arabic Emirates",
    url: "shopname.ae",
    flag: "./images/flags/AE.png",
  },
  {
    name: "Australia",
    url: "shopname.ae",
    flag: "./images/flags/AU.png",
  },
  { name: "United States", url: "shopname.ae", flag: "./images/flags/US.png" },
  { name: "Russia", url: "shopname.ru", flag: "./images/flags/RU.png" },
  { name: "Italy", url: "shopname.it", flag: "./images/flags/IT.png" },
  {
    name: "Denmark",
    url: "denmark.com.dk",
    flag: "./images/flags/DK.png",
  },
  { name: "France", url: "shopname.com.fr", flag: "./images/flags/FR.png" },
  { name: "China", url: "shopname.ae", flag: "./images/flags/CN.png" },
  {
    name: "Great Britain",
    url: "shopname.co.uk",
    flag: "./images/flags/GB.png",
  },
];

export default function CountryList() {
  return (
    <div className="w-full bg-gray-50">
      <div className="w-full mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {countries.map((c, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src={c.flag}
              alt={c.name}
              className="w-8 h-5 object-cover rounded-sm shadow"
            />
            <div>
              <h3 className="text-sm font-medium text-gray-800">{c.name}</h3>
              <p className="text-xs text-gray-500">{c.url}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
