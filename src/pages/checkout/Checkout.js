import React, { useEffect, useState } from "react";
import { BsXLg, BsFillTagFill } from "react-icons/bs";

import "./checkout.css";
import { Address } from "../../components/address/Address";
import { Footer } from "../../layout/Footer";
import { useData } from "../../context/ProductContext";
import { useClick } from "../../context/ClickContext";
import { Coupon } from "./component/Coupon";

export const Checkout = () => {
  const { pageRef, scrollToTop } = useData();
  const {
    cartData,
    addressState,
    orderSubmitHandler,
    setFinalOrder,
    coupon,
    setCoupon,
    totalPrice,
  } = useClick();

  const [showCoupon, setShowCoupon] = useState(false);

  useEffect(() => {
    setFinalOrder((prevOrder) => ({
      ...prevOrder,
      address: addressState.selectedAddress,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressState.selectedAddress]);

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectCouponHandler = (percentage, inputCode) => {
    setShowCoupon((s) => !s);
    const offPrice = totalPrice * (percentage / 100);
    const totalOffPrice = (totalPrice - offPrice).toFixed(2);
    setCoupon((c) => ({ code: inputCode, discount: totalOffPrice }));
  };

  return (
    <div ref={pageRef}>
      <div className="div-padding">
        <div className="page-content">
          <h1 className="page-title">Checkout</h1>

          <div className="checkout-flex">
            <div className="checkout-delivery-whole">
              <div className="delivery-only-whole">
                <h2 className="page-subhead">Delivery</h2>
                <div className="delivery-block">
                  <div className="delivery-card">
                    <input
                      type="radio"
                      name="delivery"
                      value="Standard"
                      id="standard"
                      onChange={(e) =>
                        setFinalOrder((f) => ({
                          ...f,
                          delivery: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor="standard">
                      <p className="delivery-label">Standard shipping</p>
                      <p className="delivery-info">Delivery within 3-7 days</p>
                    </label>
                  </div>

                  <div className="delivery-card">
                    <input
                      type="radio"
                      name="delivery"
                      value="Express"
                      id="express"
                      onChange={(e) =>
                        setFinalOrder((f) => ({
                          ...f,
                          delivery: e.target.value,
                        }))
                      }
                    />
                    <label htmlFor="express">
                      <p className="delivery-label">Express shipping</p>
                      <p className="delivery-info">Delivery within 1-3 days</p>
                    </label>
                  </div>
                </div>
              </div>

              <Address noDetail />
            </div>

            <div className="order-summary-whole">
              <h2 className="page-subhead">Order Summary</h2>
              <ul className="checkout-cart-items">
                {cartData.map((item, index) => (
                  <li key={item?.name} className="flex-center item-individual">
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
                      ₹{(item?.price * item?.qty).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pricing-block">
                <div
                  className="coupon-btn"
                  onClick={() => setShowCoupon(() => !showCoupon)}
                >
                  <div>
                    <BsFillTagFill className="coupon-icon" />
                  </div>

                  <div>Click Here To Apply Coupon</div>
                </div>

                <p className="checkout-pricing flex-center">
                  <span>Subtotal </span>
                  <span>₹{totalPrice}</span>
                </p>
                <p className="checkout-pricing flex-center">
                  <span>Shipping </span>
                  <span>Free</span>
                </p>

                {coupon.code && (
                  <div className="flex-center coupon-applied">
                    <p className="coupon-code">
                      <BsFillTagFill className="coupon-icon" />
                      Coupon Applied: {coupon.code}
                    </p>
                    <div
                      onClick={() =>
                        setCoupon((c) => ({ code: "", discount: totalPrice }))
                      }
                    >
                      <BsXLg className="coupon-remove" />
                    </div>
                  </div>
                )}

                <p className="order-pricing flex-center">
                  <span>Order Total </span>
                  <span>₹{coupon.code ? coupon.discount : totalPrice}</span>
                </p>

                {coupon.code && (
                  <p className="checkout-order-saving">
                    Congratulations! You will save{" "}
                    <span>₹{(totalPrice - coupon.discount).toFixed(2)}</span> on
                    this order!
                  </p>
                )}
              </div>

              <button
                className="card-btn order-btn"
                onClick={() => {
                  orderSubmitHandler();
                  // displayRazorpay();
                }}
              >
                {" "}
                Make an Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: showCoupon ? "" : "none" }}>
        <Coupon
          setShowCoupon={setShowCoupon}
          selectCouponHandler={selectCouponHandler}
        />
      </div>

      <Footer />
    </div>
  );
};
