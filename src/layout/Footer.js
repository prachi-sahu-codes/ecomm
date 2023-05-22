import React from "react";
import { Link } from "react-router-dom";
import { useData } from "../context/ProductContext";
import { ACTION_TYPE } from "../reducer/actionType";

export const Footer = () => {
  const { dispatch } = useData();
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
          <li>
            <Link
              className="footer-live-link"
              to="./shop"
              onClick={() =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: "Sofa",
                })
              }
            >
              Sofa
            </Link>
          </li>

          <li>
            <Link
              className="footer-live-link"
              to="./shop"
              onClick={() =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: "Chair",
                })
              }
            >
              Chair
            </Link>
          </li>
          <li>
            <Link
              className="footer-live-link"
              to="./shop"
              onClick={() =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: "Bed",
                })
              }
            >
              Bed
            </Link>
          </li>
          <li>
            <Link
              className="footer-live-link"
              to="./shop"
              onClick={() =>
                dispatch({
                  type: ACTION_TYPE.CHECKBOX_CATG,
                  payload: "Table",
                })
              }
            >
              Table
            </Link>
          </li>
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
              className="footer-live-link"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/_prachi_sahu"
              target="_blank"
              className="footer-live-link"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prachi-sahu-96b228200/"
              target="_blank"
              className="footer-live-link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
