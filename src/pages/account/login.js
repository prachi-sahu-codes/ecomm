import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import "./account.css";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const [passVisible, setPassVisible] = useState("password");
  const { userDetail, setUserDetail, loginUser } = useAuth();

  return (
    <div>
      <div className="sign">
        <h3 className="sign-title">Sign In</h3>
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <div className="sign-input-label">
            <label htmlFor="email">Email address:</label>
            <input
              type="email"
              placeholder="josh@gmail.com"
              id="email"
              name="email"
              className="sign-input"
              value={userDetail.email}
              onChange={(e) =>
                setUserDetail((u) => ({ ...u, email: e.target.value }))
              }
              required
            />
          </div>

          <div className="sign-input-label pwd-input">
            <label htmlFor="pwd">Password:</label>
            <input
              type={passVisible}
              placeholder="********"
              id="pwd"
              name="pwd"
              className="sign-input "
              value={userDetail.password}
              onChange={(e) =>
                setUserDetail((u) => ({ ...u, password: e.target.value }))
              }
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

          <button
            type="submit"
            className="card-btn"
            onClick={() => loginUser(userDetail)}
          >
            Login
          </button>
          <button
            type="submit"
            className="card-btn"
            onClick={() =>
              loginUser({
                email: "aditya66r@gmail.com",
                password: "aditya66r",
              })
            }
          >
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
