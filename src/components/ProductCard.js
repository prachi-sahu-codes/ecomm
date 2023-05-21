import React from "react";
import { useNavigate } from "react-router-dom";
import { BsHeart } from "react-icons/bs";

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
  return (
    <div>
      <div onClick={() => navigate(`/detail/${_id}`)}>
        <img src={image} alt={name} className="card-image" />
        <div className="card-heart">
          <BsHeart />
        </div>
        <div className="card-content">
          <h4 className="card-title">{name}</h4>
          <div>
            <span className="card-price">${price}</span>
          </div>
        </div>
      </div>

      <div className="product-card-btn-div">
        {!noDetail && <button className="card-btn">Add to Bag</button>}
      </div>
    </div>
  );
};
