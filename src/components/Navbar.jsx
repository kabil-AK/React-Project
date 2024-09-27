import React from "react";
import { Link } from "react-router-dom";


const Navbar = ({cart}) => {
  const cartLength = cart.length;
  return (
    <nav className="bg-gray-800 p-6 text-white font-bold flex justify-around items-center">
      <h1 className="text-4xl flex items-center justify-center gap-4 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          class="bi bi-bag-heart"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
          />
        </svg>
        AK Fake Store
      </h1>
      <div className="flex justify-around items-center gap-14">
        <Link to="/" className="text-lg font-bold hover:underline">
          Products
        </Link>
        <Link to="/About" className="text-lg font-bold hover:underline">
          About
        </Link>
        <Link to="/Contact" className="text-lg font-bold hover:underline">
          Contact Us
        </Link>
        <Link
          to="/cart"
          className="text-lg font-bold bg-red-600 hover:bg-blue-700 transition-all duration-300 px-4 py-1 rounded-lg flex items-center gap-3"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-cart-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
          </svg>
          Cart{" "}
          {cartLength > 0 && (
            <span className=" bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {cartLength}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
