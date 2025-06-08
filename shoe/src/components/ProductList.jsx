// src/components/ProductList.jsx
import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import "./ProductList.css";

const ProductList = () => {
  const { products, buyProductSize } = useContext(ShopContext);

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p className="empty-text">No products available.</p>
      ) : (
        <div className="product-table">
          <div className="product-table-header">
            <div>Product Name</div>
            <div>Description</div>
            <div>Price</div>
            <div>Buy L</div>
            <div>Buy M</div>
            <div>Buy S</div>
          </div>

          {products.map((product) => (
            <div key={product.id} className="product-row">
              <div className="name">{product.name}</div>
              <div className="desc">{product.desc}</div>
              <div className="price">₹ {product.price}</div>

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
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
