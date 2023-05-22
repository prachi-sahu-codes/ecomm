import React from "react";
import "./cart.css";
import { BsXLg } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { ProductQuantity } from "./component/productQuantity";

export const Cart = () => {
  const { cartData, deleteCartItem } = useClick();

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
            <li className=" cart-card-single" key={item._id}>
              <div className="cart-card-detail">
                <img src={item?.image} className="cart-img" alt={item?.name} />
                <div className="cart-card-title-price">
                  <p className="cart-item-name">{item?.name}</p>
                  <p className="cart-item-catg">{item?.category}</p>
                  <p className="cart-item-price">${item?.price}</p>
                </div>
              </div>

              <div className="cart-qty-price">
                <ProductQuantity _id={item?._id} qty={item?.qty} />
                <p className="cart-item-total-price">
                  ${(item?.price * item?.qty).toFixed(2)}
                </p>
                <BsXLg
                  className="cross-icon"
                  onClick={() => deleteCartItem(item._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
