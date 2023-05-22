import React from "react";
import { useNavigate } from "react-router-dom";
import "../cart/cart.css";
import "./wishlist.css";
import { BsXLg } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { useData } from "../../context/ProductContext";

export const Wishlist = () => {
  const {
    cartData,
    wishlistData,
    deleteWishItem,
    postCartData,
    updateCartItemQty,
  } = useClick();

  const { notifyToast } = useData();

  const navigate = useNavigate();
  const moveToCart = (input) => {
    const isItemPresent = cartData?.find((item) => item._id === input._id);
    if (isItemPresent) {
      updateCartItemQty(input._id, "increment");
      notifyToast("success", "Cart item updated!");
    } else {
      postCartData(input);
    }
    setTimeout(() => deleteWishItem(input._id), 500);
  };
  return (
    <div className="div-padding">
      <div className="page-content">
        <h1 className="page-title">Wishlist</h1>

        <div className="page-subtitle flex-center">
          <p className="wishlist-subtitle-product">Products</p>
        </div>

        <ul>
          {wishlistData?.map((item) => (
            <li className=" wishlist-card-single" key={item._id}>
              <div className="wish-card-detail">
                <img
                  src={item?.image}
                  className="cart-img"
                  alt={item?.name}
                  onClick={() => navigate(`/detail/${item?._id}`)}
                />
                <div className="cart-card-title-price">
                  <p className="cart-item-name">{item?.name}</p>
                  <p className="cart-item-catg">{item?.category}</p>
                  <p className="cart-item-price">${item?.price}</p>
                </div>
              </div>
              <div className="move-cart-div">
                <button
                  className="move-cart-btn"
                  onClick={() => moveToCart(item)}
                >
                  Move to Cart
                </button>
              </div>

              <div className="wishlist-icon-btn">
                <BsXLg
                  className=" cross-icon-wishlist"
                  onClick={() => deleteWishItem(item._id)}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
