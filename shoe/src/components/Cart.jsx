// src/components/Cart.jsx
import React, { useContext, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import "./Cart.css";

const Cart = ({ closeCart }) => {
  const { cart, products, clearCart } = useContext(ShopContext);

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // ✅ UseMemo → for live update
  const groupedCart = useMemo(
    () => groupCartItems(cart, products),
    [cart, products]
  );

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-text">Cart is empty.</p>
        ) : (
          <div className="cart-grouped">
            {Object.entries(groupedCart).map(([productId, productData]) => (
              <div key={productId} className="cart-product">
                <h4>{productData.name}</h4>
                <div className="cart-product-row">
                  {Object.entries(productData.sizes).map(([size, qty]) => (
                    <div key={size} className="cart-size-qty">
                      Size {size}: {qty}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="cart-total">Total: ₹ {totalPrice}</p>

        <div className="cart-buttons">
          <button
            className="place-order"
            onClick={() => {
              clearCart();
              closeCart();
            }}
          >
            Place Order
          </button>
          <button className="clear-cart" onClick={closeCart}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to group cart items
const groupCartItems = (cart, products) => {
  const grouped = {};

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.productId);
    const productName = product ? product.name : "Unknown";

    if (!grouped[item.productId]) {
      grouped[item.productId] = {
        name: productName,
        sizes: {},
      };
    }

    if (!grouped[item.productId].sizes[item.size]) {
      grouped[item.productId].sizes[item.size] = 0;
    }

    grouped[item.productId].sizes[item.size] += 1;
  });

  return grouped;
};

export default Cart;
