import React, { useState } from "react";
import { useClick } from "../../../context/ClickContext";

export const ProductQuantity = ({ _id }) => {
  const { updateCartItemQty, deleteCartItem } = useClick();
  const [quantity, setQuantity] = useState(1);

  const qtyHandler = (type) => {
    if (type === "increment") {
      setQuantity((q) => q + 1);
      updateCartItemQty(_id, "increment");
    } else if (type === "decrement") {
      if (quantity > 1) {
        setQuantity((q) => q - 1);
        updateCartItemQty(_id, "decrement");
      } else if (quantity === 1) {
        deleteCartItem(_id);
        console.log("at 1");
      } else {
        return quantity;
      }
    } else {
      return quantity;
    }
  };
  return (
    <div>
      <div className="detail-quantity">
        <button
          className="detail-quantity-btn"
          onClick={() => qtyHandler("decrement")}
        >
          {" "}
          &#x2013;
        </button>
        <span>{quantity}</span>
        <button
          className="detail-quantity-btn"
          onClick={() => qtyHandler("increment")}
        >
          +{" "}
        </button>
      </div>
    </div>
  );
};
