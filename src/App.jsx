import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MyCart from "./pages/MyCart.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Products from "./pages/Products.jsx";
import Footer from "./components/Footer.jsx";
import productDetailsData from "./data/productDetails.js";

import { Routes, Route, useParams } from "react-router";

// Wrapper component to handle product details routing
function ProductDetailsPage() {
  const { id } = useParams();
  const productId = parseInt(id);

  const selectedProduct = productDetailsData.find(
    (product) => product.id === productId
  );
  const similarProducts = selectedProduct
    ? productDetailsData
        .filter(
          (product) =>
            product.category === selectedProduct.category &&
            product.id !== selectedProduct.id
        )
        .slice(0, 8)
    : [];

  return (
    <ProductDetails
      product={selectedProduct}
      similarProducts={similarProducts}
    />
  );
}

function App() {
  return (
    <div className="bg-[#F6FAFD]">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/all-categories" element={<Products />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
