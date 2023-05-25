import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../cart/cart.css";
import "./wishlist.css";
import { BsXLg } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { useData } from "../../context/ProductContext";
import { DetailRating } from "../../components/DetailRating";
import { Footer } from "../../layout/Footer";

export const Wishlist = () => {
  const {
    cartData,
    wishlistData,
    deleteWishItem,
    postCartData,
    updateCartItemQty,
  } = useClick();

  const { notifyToast, pageRef, scrollToTop } = useData();

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

  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {wishlistData.length !== 0 ? (
        <div className="div-padding" ref={pageRef}>
          <div className="page-content">
            <div className="flex-center">
              <h1 className="page-title">Wishlist </h1>
              <span className="head-count">
                ({wishlistData?.length} Item
                {wishlistData?.length > 1 ? "s" : ""})
              </span>
            </div>

            <div className="page-subtitle flex-center">
              <p className="wishlist-subtitle-product">Products</p>
            </div>

            <ul className="wishlist-list">
              {wishlistData?.map((item, index) => (
                <li
                  className={` wishlist-card-single ${
                    index === 0 ? "first-card" : ""
                  }`}
                  key={item._id}
                >
                  <div className="wish-card-detail">
                    <img
                      src={item?.image}
                      className="cart-img"
                      alt={item?.name}
                      onClick={() => navigate(`/detail/${item?._id}`)}
                    />
                    <div className="cart-card-title-price">
                      <p className="wish-rating">
                        {item?.name}
                        <DetailRating ratingvalue={item?.rating} />
                        <span>({item?.reviewsCount})</span>
                      </p>
                      <p className="cart-item-catg">{item?.category}</p>
                      <p className="cart-item-price">${item?.price}</p>
                    </div>
                  </div>

                  <div className="wishlist-icon-btn">
                    <BsXLg
                      className=" cross-icon-wishlist"
                      onClick={() => deleteWishItem(item._id)}
                    />
                    <button
                      className="move-cart-btn"
                      onClick={() => moveToCart(item)}
                    >
                      Move to Cart
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="no-data-page">
          <h2 className="no-data-msg">
            "Transform Your Space: Fill Your Empty Wishlist with Stunning
            Furniture Picks!"
          </h2>
        </div>
      )}
      <Footer />
    </>
  );
};
