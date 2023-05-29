import React from "react";
import { ThreeDots } from "react-loader-spinner";

import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-page">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#661f1e"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};
