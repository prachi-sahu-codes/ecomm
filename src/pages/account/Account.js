import React from "react";
import "./account.css";
import { useAuth } from "../../context/AuthContext";

export const Account = () => {
  const { logoutHandler, loggedUser } = useAuth();
  return (
    <div className="account">
      <div className="account-content">
        <div className="acc-subcontent">
          <h2 className="acc-title">Personal Information</h2>
          <p className="acc-info">
            <span className="acc-info-title">First Name: </span>
            {loggedUser?.firstName}
          </p>
          <p className="acc-info">
            <span className="acc-info-title">Last Name: </span>
            {loggedUser?.lastName}
          </p>
          <p className="acc-info">
            <span className="acc-info-title">Email: </span> {loggedUser?.email}
          </p>
        </div>

        <div className="acc-subcontent">
          <h2 className="acc-title">Shipping Information</h2>
          <p className="acc-info">
            <span className="acc-info-title">First Name: </span>
            {loggedUser?.firstName}
          </p>
          <p className="acc-info">
            <span className="acc-info-title">Last Name: </span>
            {loggedUser?.lastName}
          </p>
          <p className="acc-info">
            <span className="acc-info-title">Email: </span> {loggedUser?.email}
          </p>
        </div>
      </div>
      <div className="acc-btn">
        <button className="acc-logOut" onClick={() => logoutHandler()}>
          Log Out
        </button>
      </div>
    </div>
  );
};
