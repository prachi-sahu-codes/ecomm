import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-desc">
        <h5 className="footer-head">FURN</h5>
        <p className="footer-desc-detail">
          Comfort, stylish, modern and creativity is what we define us as. We
          provide innovative futuristic designs.
        </p>
        <p>© FURN. All rights reserved</p>
      </div>
      <div className="footer-li">
        <h5 className="footer-head">HELP</h5>
        <ul className="footer-li">
          <li>Customer service</li>
          <li>FAQ</li>
          <li>My orders</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="footer-li">
        <h5 className="footer-head">CATALOG</h5>
        <ul className="footer-li">
          <li>Sofa</li>
          <li>Chair</li>
          <li>Bed</li>
          <li>Table</li>
        </ul>
      </div>
      <div className="footer-li">
        <h5 className="footer-head">LEGAL</h5>
        <ul className="footer-li">
          <li>Legal notice</li>
          <li>Terms of sale</li>
          <li>Privacy policy</li>
          <li>Cookie policy</li>
        </ul>
      </div>
      <div>
        <h5 className="footer-head">CONNECT</h5>
        <ul className="footer-li">
          <li>
            <a
              href="https://github.com/prachi-sahu-codes/"
              target="_blank"
              className="footer-li-a"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_prachi_sahu"
              target="_blank"
              className="footer-li-a"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prachi-sahu-96b228200/"
              target="_blank"
              className="footer-li-a"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
