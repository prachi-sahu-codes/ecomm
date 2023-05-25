import React from "react";
import { ColorRing } from "react-loader-spinner";
import "./loader.css";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-page">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#1c1b1b", "#661f1e", "#fff", "#661f1e", "#1c1b1b"]}
        />
      </div>
    </div>
  );
};
