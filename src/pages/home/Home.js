import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import home from "../../backend/utils/images/home.jpg";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <div className="container">
      <img src={home} alt="Hero sofa" className="hero-img" />
      <div className="hero-img-content">
        <h1 className="hero-title">Artisanal Furniture For Elevated Spaces</h1>
        <p className="hero-title-detail">
          Each furniture model from our online caatlog is the embodiment of
          excellent design, a legend in the furniture industry.
        </p>
        <Link to="/shop">
          <button className="hero-btn">Shop now</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
