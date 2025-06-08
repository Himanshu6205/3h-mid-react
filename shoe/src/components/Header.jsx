// src/components/Header.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Header.css";

const Header = ({ toggleCart, isCartVisible }) => {
  const { cart } = useContext(ShopContext);

  return (
    <div className="header">
      <h1>Simple Shoe Commerce</h1>
      <button onClick={toggleCart}>
        Cart ({cart.length}) {isCartVisible ? "▲" : "▼"}
      </button>
    </div>
  );
};

export default Header;
