import React from "react";
import "./account.css";
import { Address } from "../../components/address/Address";
import { useAuth } from "../../context/AuthContext";
import { BsFillPersonFill } from "react-icons/bs";
import { useClick } from "../../context/ClickContext";
import { OrderSummary } from "./components/OrderSummary";
import { Footer } from "../../layout/Footer";

export const Account = () => {
  const { logoutHandler, loggedUser } = useAuth();
  const { finalSummary } = useClick();

  return (
    <>
      <div className="div-padding">
        <div className="page-content">
          <div className="account-head-log-btn flex-center">
            <h2 className="acc-title">Account</h2>
            <button className="acc-logOut-mb" onClick={() => logoutHandler()}>
              Log Out
            </button>
          </div>

          <div className="account-whole">
            <div className="account-user-detail shipping-block">
              <h2 className="page-subhead">Personal Information</h2>
              <div className="account-content">
                <div>
                  <BsFillPersonFill className="acc-user-icon" />
                </div>
                <div className="acc-subcontent">
                  <p
                    className="acc-info acc-info-title"
                    style={{ textTransform: "uppercase" }}
                  >
                    {loggedUser?.firstName} {loggedUser?.lastName}{" "}
                  </p>

                  <p className="acc-info-title">{loggedUser?.email}</p>
                </div>
              </div>

              <div className="order-summary">
                <h2 className="page-subhead">Orders</h2>
                {finalSummary.length > 0 ? (
                  <ul>
                    {finalSummary?.map((item) => (
                      <li key={item?.id} className="order-sum-whole">
                        <OrderSummary item={item} />
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="no-order-msg">No orders placed yet!</p>
                )}
              </div>
            </div>
            <div className="account-address">
              <Address />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
