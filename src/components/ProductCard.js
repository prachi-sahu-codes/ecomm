import React from "react";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsFillHeartFill, BsStarFill } from "react-icons/bs";
import { useClick } from "../context/ClickContext";
import { useAuth } from "../context/AuthContext";
import { useData } from "../context/ProductContext";

export const ProductCard = ({
  _id,
  name,
  description,
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
  const { token } = useAuth();
  const { notifyToast } = useData();
  const isItemPresent = cartData?.find((item) => item._id === _id);
  const isItemWishlisted = wishlistData?.find((item) => item._id === _id);

  return (
    <div onClick={() => navigate(`/detail/${_id}`)}>
      <div className="card-image-div">
        <img src={image} alt={name} className="card-image" />
      </div>
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
                  e.stopPropagation();
                } else {
                  postWishData({
                    _id,
                    name,
                    description,
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

      {!noDetail && (
        <table className="small-card">
          <tbody>
            <tr className="table-row-card">
              <td className="table-cell-card-h">Width</td>
              <td className="table-cell-card-h">Height</td>
              <td className="table-cell-card-h">Length</td>
            </tr>
            <tr className="table-row-card">
              <td className="table-cell-card">{dimensions?.width}</td>
              <td className="table-cell-card">{dimensions?.height}</td>
              <td className="table-cell-card">{dimensions?.length}</td>
            </tr>
          </tbody>
        </table>
      )}
      <div className="card-content-absolute">
        <div className="card-content">
          <h4 className="card-title">{name}</h4>
          <div className="flex-center">
            <p className="card-price">₹{price}</p>
            <p className="card-star-rating">
              <BsStarFill color="gold" />
              {rating?.toFixed(1)}
            </p>
          </div>
        </div>

        <div className="product-card-btn-div">
          {!noDetail && (
            <div>
              {" "}
              {isItemPresent ? (
                <button
                  className="card-btn"
                  onClick={(e) => {
                    navigate("../cart");
                    e.stopPropagation();
                  }}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="card-btn"
                  onClick={(e) => {
                    if (!token) {
                      notifyToast("error", "Please Log in to continue!");
                      e.stopPropagation();
                    } else {
                      postCartData({
                        _id,
                        name,
                        description,
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
                >
                  Add to Cart
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
