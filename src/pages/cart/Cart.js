import React from "react";
import "./cart.css";
import { useClick } from "../../context/ClickContext";
import { ProductQuantity } from "./component/productQuantity";

export const Cart = () => {
  const { cartData } = useClick();
  console.log(cartData);
  return (
    <div className="div-padding">
      <div className="page-content">
        <h1 className="page-title">Cart</h1>
        <div className="page-subtitle flex-center">
          <p className="cart-subtitle-product">Product</p>
          <p className="cart-subtitle-quantity">Quantity</p>
          <p className="cart-subtitle-total">Total</p>
        </div>
        <ul>
          {cartData?.map((item) => (
            <li className="flex-center cart-card-single">
              <div className="cart-card-detail flex-center">
                <img src={item?.image} className="cart-img" alt={item?.name} />
                <div className="cart-card-title-price">
                  <p>{item?.name}</p>
                  <p>{item?.category}</p>
                  <p className="cart-price">${item?.price}</p>
                </div>
              </div>
              <p className="cart-qty">
                <ProductQuantity _id={item?.id} />
              </p>
              <p className="cart-price">${item?.price * item?.qty}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
