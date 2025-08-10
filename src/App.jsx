import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import MyCart from "./pages/MyCart.jsx";
import Footer from "./components/Footer.jsx";

import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mycart" element={<MyCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
