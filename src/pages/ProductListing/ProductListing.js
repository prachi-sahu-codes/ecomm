import React from "react";
import "./productListing.css";
import { useData } from "../../context/ProductContext";
import { Filters } from "../../components/Filters";
import { ProductCard } from "../../components/ProductCard";
import { Loader } from "../../assets/loader/loader";
import { ACTION_TYPE } from "../../reducer/actionType";

export const ProductListing = () => {
  const { sortedList, dispatch, state, loading } = useData();

  return (
    <div className="product-listing-whole">
      {loading && <Loader />}
      <div className="product-grid">
        <Filters />
        <div className="listing-main-body">
          <div className="flex-center listing-main-head">
            <select
              className="wrapper"
              onChange={(e) =>
                dispatch({
                  type: ACTION_TYPE.SORT_SELECT,
                  payload: e.target.value,
                })
              }
              value={state.sortBy}
            >
              <option value="relevance">Relevent Products</option>
              <option value="bestSell">Best Selling Products</option>
              <option value="HTL">Price: High to Low</option>
              <option value="LTH">Price: Low to High</option>
            </select>
          </div>
          <ul className="products-grid-list">
            {sortedList.length > 0
              ? sortedList.map((item) => (
                  <li key={item?._id} className="product-card">
                    <ProductCard {...item} />
                  </li>
                ))
              : !loading && <h2 className="no-data">No Products Found</h2>}
          </ul>
        </div>
      </div>
    </div>
  );
};
