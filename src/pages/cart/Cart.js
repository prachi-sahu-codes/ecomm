import React from "react";
import "./cart.css";

export const Cart = () => {
  return (
    <div className="div-padding">
      <div className="page-content">
        <h1 className="page-title">Cart</h1>
        <div className="page-subtitle">
          <p className="cart-subtitle-product">Product</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};
