import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import "../account.css";

export const OrderSummary = ({ item }) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <>
      <div className="flex-center order-sum-head">
        <div>
          <p className="order-num-head">ORDER NUMBER</p>
          <p className="order-num">{item?.id}</p>
        </div>
        <button
          className="order-detail-btn flex-center"
          onClick={() => setShowDetail((s) => !s)}
        >
          {showDetail ? (
            <>
              Hide Details <BsChevronUp className="up-down-icon" />
            </>
          ) : (
            <>
              Order Details <BsChevronDown className="up-down-icon" />
            </>
          )}
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
            <p style={{ textTransform: "uppercase" }}>
              {item?.address?.firstname} {item?.address?.lastname}
            </p>
            <p style={{ paddingBottom: "0.5rem" }}>
              {item?.address?.address}, {item?.address?.city},{" "}
              {item?.address?.state}, {item?.address?.country},{" "}
              {item?.address?.pincode}
            </p>
            <p>{item?.address?.phone}</p>
          </div>

          <p className="other-info status-border">
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
    </>
  );
};
