// src/components/ProductForm.jsx
import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./ProductForm.css";

const ProductForm = () => {
  const { addProduct } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantityL, setQuantityL] = useState("");
  const [quantityM, setQuantityM] = useState("");
  const [quantityS, setQuantityS] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      desc,
      price: Number(price),
      quantityBySize: {
        L: Number(quantityL),
        M: Number(quantityM),
        S: Number(quantityS),
      },
    };

    addProduct(newProduct);

    // Clear form
    setName("");
    setDesc("");
    setPrice("");
    setQuantityL("");
    setQuantityM("");
    setQuantityS("");
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="L Qty"
        value={quantityL}
        onChange={(e) => setQuantityL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="M Qty"
        value={quantityM}
        onChange={(e) => setQuantityM(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="S Qty"
        value={quantityS}
        onChange={(e) => setQuantityS(e.target.value)}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
