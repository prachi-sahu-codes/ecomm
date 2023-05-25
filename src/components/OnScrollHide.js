import React, { useState, useEffect } from "react";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../reducer/actionType";

export const OnScrollHide = () => {
  const { dispatch, state } = useData();
  const [isHidden, setIsHidden] = useState(false);

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
      )}
    </>
  );
};
