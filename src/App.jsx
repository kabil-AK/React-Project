import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<ProductPage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} setCart={setCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
