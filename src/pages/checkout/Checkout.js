import React, { useEffect, useState } from "react";

import "./checkout.css";
import { Address } from "../../components/address/Address";
import { Footer } from "../../layout/Footer";
import { useData } from "../../context/ProductContext";
import { useClick } from "../../context/ClickContext";

export const Checkout = () => {
  const { pageRef, scrollToTop, notifyToast } = useData();
  const { cartData, addressState, orderSubmitHandler, setFinalOrder } =
    useClick();

  const totalPrice = cartData
    ?.reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const [couponDiscount, setCouponDiscount] = useState(totalPrice);

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

  const couponOptions = [
    { value: "10%", percentage: 10 },
    { value: "15%", percentage: 15 },
    { value: "8%", percentage: 8 },
  ];

  const selectCouponHandler = (e) => {
    const couponValue = e.target.value;
    const selectedCoupon = couponOptions.find(
      (option) => option.value === couponValue
    );

    if (selectedCoupon) {
      const offPrice = totalPrice * (selectedCoupon.percentage / 100);
      const totalOffPrice = (totalPrice - offPrice).toFixed(2);
      setCouponDiscount((c) => totalOffPrice);

      notifyToast(
        "success",
        `Coupon Applied! You received ${couponValue} off on your order!`
      );
    } else {
      return couponDiscount;
    }
  };

  return (
    <div ref={pageRef}>
      <div className="div-padding">
        <div className="page-content ">
          <h1 className="page-title">Checkout</h1>

          <div className="checkout-flex">
            <div>
              <h2 className="page-subhead">Delivery</h2>
              <div className="delivery-block">
                <div className="delivery-card">
                  <input
                    type="radio"
                    name="delivery"
                    value="standard"
                    id="standard"
                    onChange={(e) =>
                      setFinalOrder((f) => ({ ...f, delivery: e.target.value }))
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
                    value="express"
                    id="express"
                    onChange={(e) =>
                      setFinalOrder((f) => ({ ...f, delivery: e.target.value }))
                    }
                  />
                  <label htmlFor="express">
                    <p className="delivery-label">Express shipping</p>
                    <p className="delivery-info">Delivery within 1-3 days</p>
                  </label>
                </div>
              </div>

              <Address noDetail />
            </div>
            <div>
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
                      ${(item?.price * item?.qty).toFixed(2)}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="pricing-block">
                <p className="checkout-pricing flex-center">
                  <span>Cart total </span>
                  <span>${totalPrice}</span>
                </p>
                <p className="checkout-pricing flex-center">
                  <span>Shipping </span>
                  <span>Free</span>
                </p>
                <div className="div-center coupon-block">
                  <span>
                    <select
                      className="select-coupon"
                      onChange={selectCouponHandler}
                      defaultValue="Select your coupon"
                      // value={}
                    >
                      <option value="Select your coupon" disabled>
                        Select your coupon
                      </option>
                      <option value="10%">
                        Get 10% off your entire order with coupon code FURN10.
                      </option>
                      <option value="15%">
                        Get 15% off your first order with coupon code NEW15.{" "}
                      </option>
                      <option value="8%">
                        Save 8% on orders over $500 and get a surprise Gift
                        voucher upto 20% off with coupon code
                        SurpriseSavings500.
                      </option>
                    </select>
                  </span>
                  <p className="checkout-pricing">Apply Coupon</p>
                </div>

                <p className="checkout-pricing flex-center">
                  <span>Order Total </span>
                  <span>${couponDiscount}</span>
                </p>
              </div>
              <button
                className="card-btn check-btn"
                onClick={orderSubmitHandler}
              >
                {" "}
                Make an Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
