import React from "react";
import "./account.css";
import { Address } from "../../components/address/Address";
import { useAuth } from "../../context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { OrderSummary } from "./components/OrderSummary";

export const Account = () => {
  const { logoutHandler, loggedUser } = useAuth();
  const { finalSummary } = useClick();

  return (
    <div className="div-padding">
      <div className="page-content">
        <div className="account-head-log-btn flex-center">
          <h2 className="acc-title">Account</h2>
          <button className="acc-logOut-mb" onClick={() => logoutHandler()}>
            Log Out
          </button>
        </div>

        <div className="account-whole">
          <div className="account-user-detail">
            <h2 className="page-subhead">Personal Information</h2>
            <div className="account-content">
              <BsFillPersonFill className="acc-user-icon" />
              <div className="acc-subcontent">
                <p className="acc-info">
                  <span className="acc-info-title">First Name: </span>
                  {loggedUser?.firstName}
                </p>
                <p className="acc-info">
                  <span className="acc-info-title">Last Name: </span>
                  {loggedUser?.lastName}
                </p>
                <p className="acc-info">
                  <span className="acc-info-title">Email: </span>{" "}
                  {loggedUser?.email}
                </p>
              </div>
            </div>

            {finalSummary.length > 0 && (
              <div className="order-summary">
                <h2 className="page-subhead">Orders</h2>
                <ul>
                  {finalSummary?.map((item) => (
                    <OrderSummary item={item} />
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="account-address">
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
};
