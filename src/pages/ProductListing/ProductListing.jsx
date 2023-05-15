import React from "react";
import "./productListing.css";
import { useData } from "../../context/ProductContext";
import { Filters } from "../../components/Filters";
import { ProductCard } from "../../components/ProductCard";

export const ProductListing = () => {
  const { data } = useData();

  return (
    <div>
      {/* <div>breadcrumbs</div> */}
      <div className="product-grid">
        <Filters />
        <div className="listing-main-body">
          <div className="flex-center listing-main-head">
            <span>Breadcrumbs</span>
            <select className="wrapper">
              <option value="Relevance">Relevent Products</option>
              <option value="Best Selling">Best Selling Products</option>
              <option value="High to Low">Price: High to Low</option>
              <option value="Low to High">Price: Low to High</option>
            </select>
          </div>
          <ul className="products-grid-list">
            {data.map((item) => (
              <li key={item?.id} className="product-card">
                <ProductCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
