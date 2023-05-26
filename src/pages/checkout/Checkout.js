import React, { useEffect } from "react";
import { Address } from "../../components/address/Address";
import { Footer } from "../../layout/Footer";
import "./checkout.css";
import { useData } from "../../context/ProductContext";
import { useClick } from "../../context/ClickContext";

export const Checkout = () => {
  const { pageRef, scrollToTop } = useData();
  const { cartData } = useClick();
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPrice = cartData
    ?.reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

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
                  <input type="radio" name="delivery" id="delivery" />
                  <div>
                    <label htmlFor="delivery" className="delivery-label">
                      Standard shipping
                    </label>
                    <p className="delivery-info">Delivery within 3-7 days</p>
                  </div>
                </div>

                <div className="delivery-card">
                  <input type="radio" name="delivery" id="delivery" />
                  <div>
                    <label htmlFor="delivery" className="delivery-label">
                      Express shipping
                    </label>
                    <p className="delivery-info">Delivery within 1-3 days</p>
                  </div>
                </div>
              </div>

              <Address noDetail />
            </div>
            <div>
              <h2 className="page-subhead">Order Summary</h2>
              <ul className="checkout-cart-items">
                {cartData.map((item, index) => (
                  <li className="flex-center item-individual">
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
                    <select className="select-coupon">
                      <option>
                        Get 10% off your entire order with coupon code FURN10.
                      </option>
                      <option>
                        Get 15% off your first order with coupon code NEW15.{" "}
                      </option>
                      <option>
                        Save $50 on orders over $199 with coupon code SAVE50
                      </option>
                    </select>
                  </span>
                  <p className="checkout-pricing">Apply Coupon</p>
                </div>
                <p className="checkout-pricing flex-center">
                  <span>Order Total </span>
                  <span>${totalPrice}</span>
                </p>
              </div>
              <button className="card-btn check-btn"> Make an order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
