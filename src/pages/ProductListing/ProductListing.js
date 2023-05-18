import React from "react";
import "./productListing.css";
import { useData } from "../../context/ProductContext";
import { Filters } from "../../components/Filters";
import { ProductCard } from "../../components/ProductCard";
import { ACTION_TYPE } from "../../backend/utils/actionType";

export const ProductListing = () => {
  const { loading, sortedList, dispatch, state } = useData();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="product-listing-whole">
      <div className="product-grid">
        <Filters />
        <div className="listing-main-body">
          <div className="flex-center listing-main-head">
            {/* <span>Breadcrumbs</span> */}
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
            {sortedList.length > 0 ? (
              sortedList.map((item) => (
                <li key={item?.id} className="product-card">
                  <ProductCard {...item} />
                </li>
              ))
            ) : (
              <h2 className="no-data">No Products Found</h2>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
