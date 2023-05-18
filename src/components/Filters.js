import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../backend/utils/actionType";

const categoryArray = ["Sofa", "Chair", "Bed", "Table"];
const ratingArray = [4, 3, 2, 1];

export const Filters = () => {
  const { state, dispatch } = useData();
  return (
    <div className="filters-box">
      <div className="filter-single">
        <label className="filter-label">Price</label>
        <input
          type="range"
          min="100"
          max="20000"
          step="100"
          value={state.priceRange}
          onChange={(e) =>
            dispatch({ type: ACTION_TYPE.PRICE_RANGE, payload: e.target.value })
          }
        />
        <div className="flex-center">
          <fieldset className="filter-input-price">
            <legend>min</legend>
            <span>$100</span>
          </fieldset>
          <span>-</span>
          <fieldset className="filter-input-price">
            <legend>max</legend>
            <span>${state.priceRange}</span>
          </fieldset>
        </div>
      </div>

      <div className="filter-single">
        <p className="filter-label">Category</p>
        {categoryArray.map((category) => (
          <label key={category} className="checkbox-whole">
            <input
              type="checkbox"
              name="category"
              className="checkbox"
              checked={state.checkboxCatg.includes(category)}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: category,
                })
              }
            />
            {category}
          </label>
        ))}
      </div>

      <div className="filter-single">
        <p className="filter-label">Ratings</p>

        {ratingArray.map((rating) => (
          <label key={rating} className="radio-whole">
            <input
              type="radio"
              name="rating"
              value=""
              checked={state.radioRating === rating}
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.RADIO_RATING,
                  payload: rating,
                })
              }
            />
            {rating} stars & above
          </label>
        ))}
      </div>

      <Link
        className="reset-link"
        onClick={() => dispatch({ type: ACTION_TYPE.CLEAR_FILTER })}
      >
        Reset all filters
      </Link>
    </div>
  );
};
