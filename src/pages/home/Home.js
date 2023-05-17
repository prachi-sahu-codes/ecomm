import React from "react";

import home from "../../backend/utils/images/home.jpg";
import { Footer } from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <img src={home} alt="Hero sofa" className="hero-img" />
      <h1 className="hero">hioiii</h1>
      <Footer />
    </div>
  );
};
