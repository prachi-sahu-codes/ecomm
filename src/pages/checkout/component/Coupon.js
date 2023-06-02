import React from "react";
import { BsGift, BsXLg } from "react-icons/bs";

const couponDetailAvailable = [
  {
    title: "10% Off",
    info: "On your entire order with coupon code",
    code: "FURN10",
    percentage: 10,
  },
  {
    title: "15% Off",
    info: "On your first order with coupon code",
    code: "NEW15",
    percentage: 15,
  },
  {
    title: "8% Off",
    info: "On orders over ₹6000 and get a surprise Gift voucher with coupon code",
    code: "SURPRISE6000",
    percentage: 8,
  },
];

export const Coupon = ({ setShowCoupon, selectCouponHandler }) => {
  return (
    <div className="coupon-bg-blur">
      <div className="coupon-single-block">
        <div className="flex-center coupon-main-title">
          <h2 className="coupons-whole-title">Coupons Available</h2>
          <div onClick={() => setShowCoupon((s) => !s)}>
            <BsXLg />
          </div>
        </div>

        <ul className="full-coupon-content">
          {couponDetailAvailable.map(({ title, info, code, percentage }) => (
            <li
              key={code}
              onClick={() => selectCouponHandler(percentage, code)}
            >
              <div className="coupon-whole design">
                <div className="coupon-single ">
                  <h2 className="coupon-head">{title}</h2>
                  <div className="icon-box">
                    <BsGift className="gift-icon" />
                  </div>
                  <p className="coupon-info">{info}</p>
                  <div className="code">{code}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
