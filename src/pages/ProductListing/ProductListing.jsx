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
        <ul className="products-grid-list">
          {data.map((item) => (
            <li key={item?.id} className="product-card">
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
