import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./address.css";
import { AddressForm } from "./component/addressForm/AddressForm";
import { FORM_ACTION_TYPE } from "../../reducer/actionType";
import { useClick } from "../../context/ClickContext";
import { useAuth } from "../../context/AuthContext";

export const Address = ({ noDetail }) => {
  const { addressState, addressDispatch } = useClick();
  const { loggedUser } = useAuth();
  console.log(loggedUser?.address);

  return (
    <div>
      <h2 className="page-subhead">Shipping Information</h2>

      <ul>
        {loggedUser?.address && (
          <li
            className="address-card"
            onChange={() =>
              addressDispatch({
                type: FORM_ACTION_TYPE.SELECT_ADDRESS_FORM,
                payload: "test-address",
              })
            }
          >
            {noDetail && (
              <input id="test-address" type="radio" name="address-radio" />
            )}
            <label htmlFor="test-address">
              <p className="address-card-head">
                {loggedUser?.firstname} {loggedUser?.lastname}
              </p>
              <p className="address-card-subhead-details">
                <span className="address-card-subhead">Address: </span>
                {loggedUser?.address}
              </p>
              <p className="address-card-subhead-details">
                <span className="address-card-subhead">Phone: </span>
                1254
              </p>
              <p className="address-card-subhead-details">
                <span className="address-card-subhead">Email: </span>
                {loggedUser.email}
              </p>
            </label>
          </li>
        )}
        {addressState.addresses.map(
          ({
            _id,
            firstname,
            lastname,
            email,
            phone,
            address,
            pincode,
            state,
            city,
            country,
          }) => (
            <li
              key={_id}
              className="address-card"
              onChange={() =>
                addressDispatch({
                  type: FORM_ACTION_TYPE.SELECT_ADDRESS_FORM,
                  payload: _id,
                })
              }
            >
              {noDetail && <input id={_id} type="radio" name="address-radio" />}
              <label htmlFor={_id}>
                <p className="address-card-head">
                  {firstname} {lastname}
                </p>
                <p className="address-card-subhead-details">
                  <span className="address-card-subhead">Address: </span>
                  {address}, {city}, {state}, {pincode}, {country}
                </p>
                <p className="address-card-subhead-details">
                  <span className="address-card-subhead">Phone: </span>
                  {phone}
                </p>
                <p className="address-card-subhead-details">
                  <span className="address-card-subhead">Email: </span>
                  {email}
                </p>
              </label>
            </li>
          )
        )}
      </ul>

      <div
        className="new-address-btn"
        onClick={() =>
          addressDispatch({ type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM })
        }
      >
        <BsPlusLg className="new-address-icon " />
        <span>Add {loggedUser.address ? "new" : ""} address</span>
      </div>

      <div style={{ display: addressState.openedAddressForm ? "" : "none" }}>
        <AddressForm addressDispatch={addressDispatch} />
      </div>
    </div>
  );
};
