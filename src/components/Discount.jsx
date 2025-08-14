import React from "react";

function Discount() {
  return (
    <div className="w-[90%] rounded m-auto text-white lg:flex hidden justify-between items-center bg-blue bg-[url(/images/Rectangle-176.png)] bg-cover bg-center bg-no-repeat">
      <div className="w-[60%] rounded py-6 px-12 bg-[url(/images/Rectangle-177.png)] bg-cover bg-center bg-no-repeat">
        <h1 className="text-2xl font-medium">
          Super discount on more than 100 USD
        </h1>
        <p>Have you ever finally just write dummy info</p>
      </div>
      <div className="w-auto rounded py-6 px-12">
        <button
          type="submit"
          className="py-2 px-4 rounded bg-[#FE9017] font-medium cursor-pointer hover:scale-105 duration-300"
        >
          Shop now
        </button>
      </div>
    </div>
  );
}

export default Discount;
