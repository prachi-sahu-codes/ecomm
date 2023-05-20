import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import "./account.css";
import { useAuth } from "../../context/AuthContext";

export const Signup = () => {
  const { signUpUser } = useAuth();
  const [passVisible, setPassVisible] = useState("password");
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const clickSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(userInfo.email);
    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.password &&
      isEmail
    ) {
      signUpUser(userInfo);
    }
  };
  return (
    <div className="sign">
      <h3 className="sign-title">Sign Up</h3>
      <form className="sign-form" onSubmit={(e) => e.preventDefault()}>
        <div className="flex-center">
          <div className="sign-input-label">
            <label for="first">First name:</label>
            <input
              type="text"
              placeholder="Josh"
              id="first"
              name="first"
              className="sign-input"
              onChange={(e) =>
                setUserInfo((u) => ({ ...u, firstName: e.target.value }))
              }
              required
            />
          </div>

          <div className="sign-input-label">
            <label for="last">Last name:</label>
            <input
              type="text"
              placeholder="Dun"
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
          <label for="email">Email address:</label>
          <input
            type="email"
            placeholder="josh@gmail.com"
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
          <label for="pwd">Password:</label>
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
  );
};
