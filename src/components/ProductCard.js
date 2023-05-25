import React from "react";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";
import { useClick } from "../context/ClickContext";
import { useData } from "../context/ProductContext";
import { useAuth } from "../context/AuthContext";

//BsHeart, BsPerson, BsSearch, BsSliders2(phone filter), BsChevronDown, BsChevronUp, BsDashLg, BsDash, BsPlusLg, BsPlus, BsJustify(hamburger), BsFillBagPlusFill, BsFillHeartFill

export const ProductCard = ({
  _id,
  name,
  decription,
  price,
  category,
  dimensions,
  image,
  rating,
  reviewsCount,
  sales,
  reviews,
  noDetail,
}) => {
  const navigate = useNavigate();
  const { cartData, postCartData, wishlistData, postWishData, deleteWishItem } =
    useClick();
  const { notifyToast } = useData();
  const { token } = useAuth();
  const isItemPresent = cartData?.find((item) => item._id === _id);
  const isItemWishlisted = wishlistData?.find((item) => item._id === _id);

  return (
    <div>
      <div onClick={() => navigate(`/detail/${_id}`)}>
        <img src={image} alt={name} className="card-image" />
        {!noDetail && (
          <div className="card-heart">
            {isItemWishlisted ? (
              <BsFillHeartFill
                color="#661f1e"
                onClick={(e) => {
                  if (!token) {
                    notifyToast("error", "Please Log in to continue!");
                  } else {
                    deleteWishItem(_id);
                    e.stopPropagation();
                  }
                }}
              />
            ) : (
              <BsHeart
                color="#661f1e"
                onClick={(e) => {
                  if (!token) {
                    notifyToast("error", "Please Log in to continue!");
                  } else {
                    postWishData({
                      _id,
                      name,
                      decription,
                      price,
                      category,
                      dimensions,
                      image,
                      rating,
                      reviewsCount,
                      sales,
                      reviews,
                    });
                    e.stopPropagation();
                  }
                }}
              />
            )}
          </div>
        )}
        <div className="card-content">
          <h4 className="card-title">{name}</h4>
          <div>
            <span className="card-price">${price}</span>
          </div>
        </div>
      </div>

      <div className="product-card-btn-div">
        {!noDetail && (
          <div>
            {" "}
            {isItemPresent ? (
              <button className="card-btn" onClick={() => navigate("../cart")}>
                Go to Cart
              </button>
            ) : (
              <button
                className="card-btn"
                onClick={() => {
                  if (!token) {
                    notifyToast("error", "Please Log in to continue!");
                  } else {
                    postCartData({
                      _id,
                      name,
                      decription,
                      price,
                      category,
                      dimensions,
                      image,
                      rating,
                      reviewsCount,
                      sales,
                      reviews,
                    });
                  }
                }}
              >
                Add to Cart
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
