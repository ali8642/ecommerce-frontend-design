import React from "react";
import Newsletter from "../components/Newsletter.jsx";
import Card from "../components/Card.jsx";
import Countdown from "../components/Countdown.jsx";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="w-[90%] bg-white border-2 border-gray-300 rounded">
        {/* CATEGORIES SECTION */}
        <div><Countdown  /></div>
      </div>

      <Card
        productImage="./images/tech/1.jpg"
        productPrice="$99.50"
        productDetail="iPhone 12 128GB"
        productType="Mobile - Red"
        productRating="4.5"
      />
      <Newsletter />
    </>
  );
};

export default Home;
