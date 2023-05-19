import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import "./account.css";

export const Account = () => {
  const [passVisible, setPassVisible] = useState("password");
  return (
    <div className="account">
      <div className="sign">
        <h3 className="sign-title">Sign In</h3>
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <div className="sign-input-label">
            <label for="email">Email address:</label>
            <input
              type="email"
              placeholder="josh@gmail.com"
              id="email"
              name="email"
              className="sign-input"
              required
            />
          </div>

          <div className="sign-input-label pwd-input">
            <label for="pwd">Password:</label>
            <input
              type={passVisible}
              placeholder="********"
              id="pwd"
              name="pwd"
              className="sign-input "
              required
            />
            <div className="pwd-eye-icon">
              {passVisible === "password" ? (
                <BsEyeSlashFill onClick={() => setPassVisible(() => "text")} />
              ) : (
                <BsEyeFill onClick={() => setPassVisible(() => "password")} />
              )}
            </div>
          </div>

          <button type="submit" className="card-btn">
            Login
          </button>
          <button type="submit" className="card-btn">
            Login as a guest
          </button>
          <div>
            <span>Already have an account? </span>
            <Link to="/signUp" className="sign-link">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
