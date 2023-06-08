import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import empty from "../../assets/empty.png";
import "../../App.css";
import "./cart.css";
import { BsXLg } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { ProductQuantity } from "./component/productQuantity";
import { useData } from "../../context/ProductContext";
import { Footer } from "../../layout/Footer";

export const Cart = () => {
  const { cartData, deleteCartItem, wishlistData, postWishData } = useClick();
  const { pageRef, scrollToTop, notifyToast } = useData();

  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const totalPrice = cartData
    ?.reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const count = cartData?.reduce((acc, item) => acc + item.qty, 0);

  const moveToWishlist = (input) => {
    const isItemWishlisted = wishlistData?.find(
      (item) => item._id === input._id
    );
    if (isItemWishlisted) {
      deleteCartItem(input._id);
      notifyToast("error", "Removed from Cart!");
    } else {
      postWishData(input);
      setTimeout(() => {
        deleteCartItem(input._id);
        notifyToast("error", "Removed from Cart!");
      }, 1000);
    }
  };

  return (
    <>
      {cartData.length !== 0 ? (
        <div className="div-padding" ref={pageRef}>
          <div className="page-content">
            <div className="flex-center title-padding-mb">
              <h1 className="page-title page-title-mb">Cart</h1>
              <span className="head-count">
                ({count} Item{count > 1 ? "s" : ""})
              </span>
            </div>
            <table className="cart-table">
              <thead className="table-title">
                <tr>
                  <th className="thead-product">Product</th>
                  <th>Quantity</th>
                  <th className="thead-price">Subtotal</th>
                  <th className="thead-empty"></th>
                </tr>
              </thead>
              <tbody className="cart-table-body">
                {cartData?.map((item, index) => (
                  <tr key={item._id}>
                    <td>
                      <div
                        className={`cart-card-detail ${
                          index === 0 ? "first-card" : ""
                        }`}
                        onClick={() => navigate(`/detail/${item._id}`)}
                      >
                        <img
                          src={item?.image}
                          className="cart-img"
                          alt={item?.name}
                        />
                        <div className="cart-card-title-price">
                          <p className="cart-item-name">{item?.name}</p>
                          <p className="cart-item-catg">{item?.category}</p>
                          <p className="cart-item-price">₹{item?.price}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="cart-qty-price">
                        <ProductQuantity _id={item?._id} qty={item?.qty} />
                      </div>
                    </td>
                    <td className="cart-item-total-price">
                      ₹{(item?.price * item?.qty).toFixed(2)}
                    </td>
                    <td className="cross-icon-btn">
                      <BsXLg
                        className="cross-icon"
                        onClick={() => {
                          deleteCartItem(item._id);
                          notifyToast("error", "Removed from Cart!");
                        }}
                      />
                      <button
                        className="move-cart-btn"
                        onClick={() => moveToWishlist(item)}
                      >
                        Move to Wishlist
                      </button>
                    </td>
                  </tr>
                ))}
                <tr className="cart-final">
                  <td></td>
                  <td></td>
                  <td>
                    <p className="cart-final-price">Total: ₹{totalPrice}</p>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>

            <div className="cart-table-mb">
              <div className="page-subtitle flex-center">
                <p className="wishlist-subtitle-product">Products</p>
              </div>
              {cartData?.map((item) => (
                <li className="mobile-card-single" key={item._id}>
                  <div className="flex-center">
                    <div className="div-center">
                      <img
                        src={item?.image}
                        className="cartList-item-img"
                        alt={item?.name}
                      />
                      <div className="cart-card-title-price">
                        <p className="cart-item-name">{item?.name}</p>
                        <p className="cart-item-catg">{item?.category}</p>
                        <p className="cart-item-price">
                          {" "}
                          ₹{(item?.price * item?.qty).toFixed(2)}
                        </p>
                        <div className="cart-qty-price card-qty-mb">
                          <ProductQuantity _id={item?._id} qty={item?.qty} />
                        </div>
                      </div>
                    </div>
                    <BsXLg
                      className="cartList-cross-icon-mb"
                      onClick={() => {
                        deleteCartItem(item._id);
                        notifyToast("error", "Removed from Cart!");
                      }}
                    />
                  </div>
                  <button
                    className="cartList-btn-mb"
                    onClick={() => moveToWishlist(item)}
                  >
                    Move to Wishlist
                  </button>
                </li>
              ))}
              <p className="cart-final-price-mb">Total: ₹{totalPrice}</p>
            </div>

            <div className="check-btn-div">
              <button
                className="card-btn check-btn"
                onClick={() => navigate(`/checkout`)}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-data-page" ref={pageRef}>
          <div className="no-data-msg">
            <img
              src={empty}
              className="no-data-img"
              alt="Boy sitting in empty box"
            />
            <h2 className="no-data-content-msg">
              "Discover the Art of Space: Your Empty Cart Awaits Your Perfect
              Furniture Pieces!"
            </h2>
            <div>
              <button
                className="nodata-page-link card-btn"
                onClick={() => navigate(`../shop`)}
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
