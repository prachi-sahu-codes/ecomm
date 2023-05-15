import React from "react";
import { Link } from "react-router-dom";

export const Filters = () => {
  return (
    <div className="filters-box">
      <div className="filter-single">
        <label className="filter-label">Price</label>
        <input type="range" min="100" max="20000" step="100" />
      </div>

      <div className="filter-single">
        <p className="filter-label">Category</p>
        <label className="checkbox-whole">
          <input type="checkbox" name="category" className="checkbox" />
          Sofa
        </label>
        <label className="checkbox-whole">
          <input type="checkbox" name="category" className="checkbox" />
          Chair
        </label>
        <label className="checkbox-whole">
          <input type="checkbox" name="category" className="checkbox" />
          Bed
        </label>
        <label className="checkbox-whole">
          <input type="checkbox" name="category" className="checkbox" />
          Table
        </label>
      </div>

      <div className="filter-single">
        <p className="filter-label">Ratings</p>
        <label className="radio-whole">
          <input type="radio" name="rating" />
          Rating
        </label>
      </div>

      <Link className="reset-link">Reset all filters</Link>
    </div>
  );
};
