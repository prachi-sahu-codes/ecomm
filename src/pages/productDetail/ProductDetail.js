import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  BsHeart,
  BsFillHeartFill,
  BsFillPersonFill,
  BsGraphUpArrow,
} from "react-icons/bs";
import { DetailRating } from "../../components/DetailRating";

import "./productDetail.css";
import { useClick } from "../../context/ClickContext";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/ProductContext";
import { Loader } from "../../components/loader/loader";
import { Footer } from "../../layout/Footer";

export const ProductDetail = () => {
  const { productId } = useParams();
  const { cartData, postCartData, wishlistData, postWishData, deleteWishItem } =
    useClick();
  const { token } = useAuth();
  const { loading, setLoading, notifyToast, pageRef, scrollToTop } = useData();

  const navigate = useNavigate();

  const [findItem, setFindItem] = useState({});

  const rating = findItem?.rating;
  const isItemPresent = cartData?.find((item) => item._id === productId);
  const isItemWishlisted = wishlistData?.find((item) => item._id === productId);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/${productId}`);
      const dataFetched = await res.json();
      setFindItem(dataFetched?.product);
      setTimeout(() => setLoading(false), 500);
      if (!dataFetched?.product) {
        navigate("../shop");
      }
    } catch (e) {
      console.error("Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="detail" ref={pageRef}>
        <div className="detail-image-div">
          <img
            src={findItem?.image}
            className="detail-image"
            alt={findItem?.name}
          />
        </div>

        <div className="detail-content">
          <div className="flex-center detail-title-icon">
            <div className="detail-title">
              <span>{findItem?.name}</span> <span> ₹{findItem?.price}</span>
            </div>

            <div className="detail-icon-heart">
              {isItemWishlisted ? (
                <BsFillHeartFill
                  color="#661f1e"
                  onClick={(e) => {
                    if (!token) {
                      notifyToast("error", "Please Log in to continue!");
                    } else {
                      deleteWishItem(productId);
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
                      postWishData(findItem);
                    }
                  }}
                />
              )}
            </div>
          </div>

          <p className="detail-desc">{findItem?.description}</p>
          <div className=" rating-whole flex-center">
            <div>
              <h3 className="detail-rating-title">Average Rating</h3>

              <div className="div-center">
                <span className="detail-rating-star">
                  <DetailRating ratingvalue={rating} />
                </span>
                <span className="rating-number">({rating?.toFixed(1)})</span>
              </div>
              <p className="rating-desc">Average rating on this year</p>
            </div>
            <div>
              <h3 className="detail-rating-title">Total Reviews</h3>
              <p className="rating-number div-center">
                {findItem?.reviewsCount}{" "}
                <span className="rating-hike">
                  {findItem?.ratingHike}% <BsGraphUpArrow />
                </span>
              </p>
              <p className="rating-desc">Growth in reviews on this year</p>
            </div>
          </div>

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
                  postCartData(findItem);
                }
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <div className="bottom-content">
        <h3 className="detail-subHead">Dimensions</h3>
        <p className="detail-desc">
          Discover the versatility of our furniture dimensions. At FURN, we
          understand that every space is unique, which is why our furniture
          offers customizability to perfectly fit your needs. With standard size
          options available, you can easily find the right dimensions for your
          home. Experience the freedom to create a personalized living
          environment that seamlessly blends style and functionality.
        </p>
        <table className="table-container">
          <tbody>
            <tr className="table-row table-head">
              <th className="table-cell" colSpan="3">
                Dimensions
              </th>
            </tr>
            <tr className="table-row">
              <td className="table-cell">
                Width: {findItem?.dimensions?.width}
              </td>
              <td className="table-cell">
                Height: {findItem?.dimensions?.height}
              </td>
              <td className="table-cell">
                Length: {findItem?.dimensions?.length}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="detail-subHead">Reviews</h3>

        <p className="detail-desc">
          The product has a rating of{" "}
          <strong className="rating-strong-num">
            "{findItem?.rating?.toFixed(1)} stars"
          </strong>{" "}
          and have garnered{" "}
          <strong className="rating-strong-num">
            "{findItem?.reviewsCount}"
          </strong>{" "}
          reviews, and impressive sales performance. Below are the reviews from
          our valued customers:
        </p>

        <ul>
          {findItem?.reviews?.map(({ author, text, rating }) => (
            <li key={author} className="review-box">
              <div className="flex-center review-box-mb">
                <div className="flex-center">
                  <BsFillPersonFill className="human-icon" />{" "}
                  <span className="rating-author">{author}</span>
                </div>

                <DetailRating ratingvalue={rating} />
              </div>
              <p className="detail-desc">{text}</p>
            </li>
          ))}
        </ul>

        <p className="detail-desc">
          These are just a few examples of the positive feedback we receive from
          our satisfied customers. Experience the same level of satisfaction by
          exploring our furniture collection today.
        </p>
      </div>
      <Footer />
    </>
  );
};
