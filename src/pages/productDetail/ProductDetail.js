import React, { useRef, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { DetailRating } from "../../components/DetailRating";

import "./productDetail.css";
import { Loader } from "../../assets/loader/loader";

export const ProductDetail = () => {
  const { productId } = useParams();
  const [findItem, setFindItem] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/products/${productId}`);
      const dataFetched = await res.json();
      setFindItem(dataFetched?.product);
      setLoading(false);
    } catch (e) {
      console.error("Error:", e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const pageRef = useRef();

  const scrollToTop = () => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  const rating = findItem?.rating;

  return (
    <>
      {loading && <Loader />}
      <div className="detail" ref={pageRef}>
        <img
          src={findItem?.image}
          className="detail-image"
          alt={findItem?.name}
        />

        <div className="detail-content">
          <div className="flex-center detail-title-icon">
            <h2 className="detail-title">
              {findItem?.name} <br /> ${findItem?.price}
            </h2>

            <BsHeart className="detail-icon-heart" />
          </div>

          <p className="detail-desc">{findItem?.description}</p>
          <div className="flex-center qty-rating-head">
            <h3 className="detail-quantity-title">Quantity</h3>
            <h3 className="detail-quantity-title">Rating</h3>
          </div>
          <div className="flex-center">
            <div className="detail-quantity">
              <button className="detail-quantity-btn"> &#x2013;</button>
              <span>{findItem?.quantity}</span>
              <button className="detail-quantity-btn">+ </button>
            </div>

            <div className="detail-rating">
              <DetailRating ratingvalue={rating} />
            </div>
          </div>

          <button className="card-btn">Add to Bag</button>
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
          <strong className="rating-strong-num">{findItem?.rating}</strong> and
          have garnered{" "}
          <strong className="rating-strong-num">
            {findItem?.reviewsCount}
          </strong>{" "}
          reviews, and impressive sales performance. Below are the reviews from
          our valued customers:
        </p>

        <ul>
          {findItem?.reviews?.map(({ author, text, rating }) => (
            <li key={author} className="review-box">
              <div className="flex-center">
                <strong className="rating-author">{author}</strong>

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
    </>
  );
};
