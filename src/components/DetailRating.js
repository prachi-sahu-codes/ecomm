import React from "react";
import { BsStarFill, BsStar } from "react-icons/bs";

export const DetailRating = ({ ratingvalue }) => {
  const maxRating = 5;
  console.log(ratingvalue);
  const coloredStars = Math.floor(ratingvalue ?? 0);
  const uncoloredStars = maxRating - coloredStars;

  return (
    <div>
      {[...Array(coloredStars)].map((_, index) => (
        <BsStarFill key={index} color="gold" />
      ))}
      {[...Array(uncoloredStars)].map((_, index) => (
        <BsStar key={index} color="gray" />
      ))}
    </div>
  );
};
