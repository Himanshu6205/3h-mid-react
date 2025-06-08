// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div
      className="container"
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Header toggleCart={toggleCart} isCartVisible={showCart} />

      <ProductForm />
      <ProductList />

      {showCart && <Cart closeCart={closeCart} />}
    </div>
  );
};

export default App;
