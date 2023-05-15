import React from "react";

export const ProductCard = ({
  id,
  name,
  decription,
  price,
  category,
  color,
  material,
  dimensions,
  image,
  rating,
  reviews,
}) => {
  return (
    <>
      <img src={image} alt={name} className="card-image" />
      <h4 className="card-title">{name}</h4>
      <p className="card-price">$ {price}</p>
    </>
  );
};
