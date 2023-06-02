import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import "./account.css";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/ProductContext";

export const Signup = () => {
  const { signUpUser } = useAuth();
  const { notifyToast } = useData();
  const [passVisible, setPassVisible] = useState("password");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const clickSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(userInfo.email);
    if (!isEmail) {
      notifyToast("error", "Please enter a valid email!");
    }
    const checkPassword = userInfo.password === userInfo.confirm_password;
    if (!checkPassword) {
      notifyToast("error", "Passwords didn't match!");
    }
    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.password &&
      isEmail &&
      checkPassword
    ) {
      signUpUser(userInfo);
    }
  };
  return (
    <div className="signup-page">
      <div className="sign sign-up-whole">
        <h3 className="sign-title">Sign Up</h3>
        <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-center name-sign-up">
            <div className="sign-input-label">
              <label htmlFor="first">First name:</label>
              <input
                type="text"
                placeholder="Prachi"
                id="first"
                name="first"
                className="sign-input sign-input-first"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, firstName: e.target.value }))
                }
                required
              />
            </div>

            <div className="sign-input-label">
              <label htmlFor="last">Last name:</label>
              <input
                type="text"
                placeholder="Sahu"
                id="last"
                name="last"
                className="sign-input"
                onChange={(e) =>
                  setUserInfo((u) => ({ ...u, lastName: e.target.value }))
                }
                required
              />
            </div>
          </div>
          <div className="sign-input-label">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              placeholder="prachi@gmail.com"
              id="email"
              name="email"
              className="sign-input"
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, email: e.target.value }))
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
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, password: e.target.value }))
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

          <div className="sign-input-label pwd-input">
            <label htmlFor="cnfrmpwd">Confirm password:</label>
            <input
              type={passVisible}
              placeholder="********"
              id="cnfrmpwd"
              name="cnfrmpwd"
              className="sign-input "
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, confirm_password: e.target.value }))
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
            onClick={() => clickSubmit(userInfo)}
          >
            Create new account
          </button>
          <div>
            <span>Don't have an account? </span>
            <Link to="/login" className="sign-link">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
