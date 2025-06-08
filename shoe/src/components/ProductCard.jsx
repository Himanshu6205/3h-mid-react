// src/components/ProductCard.jsx
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, buyProductSize }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="desc">{product.desc}</p>
      <p className="price">₹ {product.price}</p>
      <div className="buy-buttons">
        <button
          disabled={product.quantityBySize.L <= 0}
          onClick={() => buyProductSize(product.id, "L", product.price)}
          className={product.quantityBySize.L > 0 ? "active" : "disabled"}
        >
          L ({product.quantityBySize.L})
        </button>
        <button
          disabled={product.quantityBySize.M <= 0}
          onClick={() => buyProductSize(product.id, "M", product.price)}
          className={product.quantityBySize.M > 0 ? "active" : "disabled"}
        >
          M ({product.quantityBySize.M})
        </button>
        <button
          disabled={product.quantityBySize.S <= 0}
          onClick={() => buyProductSize(product.id, "S", product.price)}
          className={product.quantityBySize.S > 0 ? "active" : "disabled"}
        >
          S ({product.quantityBySize.S})
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
