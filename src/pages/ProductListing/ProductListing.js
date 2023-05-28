import React, { useEffect } from "react";
import "./productListing.css";
import { useData } from "../../context/ProductContext";
import { Filters } from "../../components/Filters";
import { ProductCard } from "../../components/ProductCard";
import { OnScrollHide } from "../../components/OnScrollHide";
import { Loader } from "../../components/loader/loader";
import { Footer } from "../../layout/Footer";

export const ProductListing = () => {
  const { sortedList, loading, setLoading } = useData();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-listing-whole">
      {loading && <Loader />}
      <div className="product-grid">
        <div className="product-listing-mb">
          <Filters />
        </div>
        <div className="listing-main-body">
          <OnScrollHide />
          <ul className="products-grid-list">
            {sortedList.length > 0
              ? sortedList.map((item) => (
                  <li key={item?._id} className="product-card">
                    <ProductCard {...item} />
                  </li>
                ))
              : !loading && (
                  <h2 className="no-data">
                    "Searching High and Low... No Products Found!"
                  </h2>
                )}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};
