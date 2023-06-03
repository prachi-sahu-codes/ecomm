import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
import { Footer } from "../../layout/Footer";

export const NotFound = () => {
  return (
    <>
      <div className="no-data-page">
        <div className="notFound-content no-data-msg">
          <h3>404: Looks like something is missing!</h3>
          <h7
            style={{
              fontSize: "1.2rem",
              paddingTop: "1rem",
              display: "inline-block",
              color: "black",
            }}
          >
            Go back to explore products
          </h7>
          <div>
            <Link to="./shop" className="notFound-link card-btn">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
