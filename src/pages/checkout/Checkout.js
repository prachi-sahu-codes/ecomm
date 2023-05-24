import React from "react";
import { Address } from "../../components/address/Address";

export const Checkout = () => {
  return (
    <div className="div-padding">
      <div className="page-content">
        <h1 className="page-title">Checkout</h1>
        <Address noDetail />
        <h2 className="page-subhead">Delivery</h2>
      </div>
    </div>
  );
};
