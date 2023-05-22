import React, { useState } from "react";
import { useClick } from "../../../context/ClickContext";

export const ProductQuantity = ({ _id }) => {
  const { updateCartDataQty } = useClick();
  const [quantity, setQuantity] = useState({
    value: 1,
    qtyType: "",
  });

  const qtyHandler = (type) => {
    if (type === "incre") {
      setQuantity((q) => ({
        value: q.value + 1,
        qtyType: "increment",
      }));
    } else if (type === "decre") {
      return quantity.value <= 1
        ? quantity.value
        : setQuantity((q) => ({
            value: q.value - 1,
            qtyType: "decrement",
          }));
    } else {
      return quantity;
    }
  };
  return (
    <div>
      <div className="detail-quantity">
        <button
          className="detail-quantity-btn"
          onClick={() => {
            qtyHandler("decre");
            updateCartDataQty(_id, quantity.qtyType);
          }}
        >
          {" "}
          &#x2013;
        </button>
        <span>{quantity.value}</span>
        <button
          className="detail-quantity-btn"
          onClick={() => {
            qtyHandler("incre");
            updateCartDataQty(_id, quantity.qtyType);
          }}
        >
          +{" "}
        </button>
      </div>
    </div>
  );
};
