import React, { useState, useEffect } from "react";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../reducer/actionType";
import { BsJustify } from "react-icons/bs";
import { Filters } from "./Filters";

export const OnScrollHide = () => {
  const { dispatch, state } = useData();
  const [isHidden, setIsHidden] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 30;

      setIsHidden(() => scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isHidden ? (
        ""
      ) : (
        <div className="scroll-content">
          <div className="flex-center listing-main-head">
            <div className="burger-mb" onClick={() => setShowFilter((s) => !s)}>
              <BsJustify />
            </div>

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

          {showFilter && (
            <div
              className={`mb-filter-show ${showFilter ? "show-filter" : ""}`}
            >
              <Filters />
            </div>
          )}
        </div>
      )}
    </>
  );
};
