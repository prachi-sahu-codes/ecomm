import React, { useState } from "react";
import "../account.css";

export const OrderSummary = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <li key={item?.id} className="order-sum-whole">
      <div className="flex-center order-sum-head">
        <div>
          <p className="order-num-head">ORDER NUMBER</p>
          <p className="order-num">{item?.id}</p>
        </div>
        <button
          className="order-detail-btn"
          onClick={() => setShowDetail((s) => !s)}
        >
          {showDetail ? "Hide Details" : "Order Details"}
        </button>
      </div>
      {showDetail && (
        <div className="order-hidden-whole">
          <p className="flex-center order-sum-bold ">
            <span>Order Total: </span>
            <span>${item?.totalPrice}</span>
          </p>
          <p className="other-info">
            <span className="order-sum-subhead">Placed: </span>
            {item?.date}
          </p>

          <p className="other-info">
            <span className="order-sum-subhead">Delivery: </span>
            {item?.delivery} Shipping
          </p>

          <p className="order-sum-add-whole">Shipping Address:</p>
          <div className="other-info">
            <p>
              {item?.address?.firstname} {item?.address?.lastname}
            </p>
            <p>
              Address: {item?.address?.address}, {item?.address?.city},{" "}
              {item?.address?.state}, {item?.address?.country}
            </p>
            <p>Email: {item?.address?.email}</p>
            <p>Phone: {item?.address?.phone}</p>
          </div>

          <p className="other-info">
            <span className="order-sum-subhead"> Status: </span>
            {item?.cartitems?.length} Item
            {item?.cartitems?.length > 1 && "s"} In Transit, Moving as Expected
          </p>

          <ul className="order-sum-items">
            {item?.cartitems?.map((item) => (
              <li
                key={item?.name}
                className="flex-center item-individual order-individual"
              >
                <div className="div-center">
                  <img
                    src={item?.image}
                    className="checkout-item-img"
                    alt={item?.name}
                  />
                  <div className="">
                    <p className="cart-item-name">{item?.name}</p>
                    <p className="delivery-info">Quantity: {item?.qty}</p>
                  </div>
                </div>

                <p className="cart-item-price">
                  {" "}
                  ${(item?.price * item?.qty).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <p className="flex-center order-saving">
            Total Savings: <span>${item?.savings} </span>
          </p>
        </div>
      )}
    </li>
  );
};
