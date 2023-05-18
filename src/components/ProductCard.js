import React from "react";
import { BsHeart } from "react-icons/bs";

//BsHeart, BsPerson, BsSearch, BsSliders2(phone filter), BsChevronDown, BsChevronUp, BsDashLg, BsDash, BsPlusLg, BsPlus, BsJustify(hamburger), BsFillBagPlusFill, BsFillHeartFill

export const ProductCard = ({
  id,
  name,
  decription,
  price,
  discountedPrice,
  category,
  color,
  material,
  dimensions,
  image,
  rating,
  reviews,
  noDetail,
}) => {
  return (
    <>
      <img src={image} alt={name} className="card-image" />
      <div className="card-heart">
        <BsHeart />
      </div>
      <div className="card-content">
        <h4 className="card-title">{name}</h4>
        <div>
          <span className="card-price">${price}</span>

          {/* <button className="card-btn">Add to Bag</button> */}
        </div>
        {!noDetail && <button className="card-btn">Add to Bag</button>}
        {/* <button className="card-btn" style={{width:"100%"}}>Add to Cart</button> */}
      </div>
    </>
  );
};
