import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";

export const NotFound = () => {
  return (
    <div className="notFound-content">
      <h1>404: Looks like something is missing!</h1>
      <h7
        style={{
          fontSize: "1.2rem",
          paddingTop: "1rem",
          display: "inline-block",
        }}
      >
        Go back to explore products
      </h7>
      <Link to="./shop" className="notFound-link">
        See Products
      </Link>
    </div>
  );
};
