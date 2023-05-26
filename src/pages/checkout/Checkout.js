import React, { useEffect } from "react";
import { Address } from "../../components/address/Address";
import { Footer } from "../../layout/Footer";
import "./checkout.css";
import { useData } from "../../context/ProductContext";

export const Checkout = () => {
  const { pageRef, scrollToTop } = useData();
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={pageRef}>
      <div className="div-padding">
        <div className="page-content checkout-flex">
          <div>
            <h1 className="page-title">Checkout</h1>
            <Address noDetail />
            <h2 className="page-subhead">Delivery</h2>
            <div className="delivery-block">
              <div>
                <input type="radio" name="delivery" id="delivery" />
                <label htmlFor="delivery" className="delivery-label">
                  Standard shipping
                </label>
                <p className="delivery-info">Delivery within 3-7 days</p>
              </div>

              <div>
                <input type="radio" name="delivery" id="delivery" />
                <label htmlFor="delivery" className="delivery-label">
                  Express shipping
                </label>
                <p className="delivery-info">Delivery within 1-3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
