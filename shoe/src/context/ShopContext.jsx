// src/context/ShopContext.jsx
import React, { createContext, useState } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, { id: Date.now(), ...product }]);
  };

  const buyProductSize = (productId, size, price) => {
    // 1️⃣ Add to cart
    setCart((prevCart) => [
      ...prevCart,
      { id: Date.now(), productId, size, price },
    ]);

    // 2️⃣ Reduce stock
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantityBySize: {
              ...product.quantityBySize,
              [size]: product.quantityBySize[size] - 1,
            },
          };
        } else {
          return product;
        }
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        setProducts, // ✅ expose
        cart,
        setCart, // ✅ expose
        addProduct,
        buyProductSize,
        clearCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
