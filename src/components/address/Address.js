import React from "react";
import { BsPlusLg } from "react-icons/bs";
import "./address.css";
import { AddressForm } from "./component/addressForm/AddressForm";
import { FORM_ACTION_TYPE } from "../../reducer/actionType";
import { useClick } from "../../context/ClickContext";
import { useData } from "../../context/ProductContext";

export const Address = ({ noDetail }) => {
  const { addressState, addressDispatch, editAddress } = useClick();
  const { notifyToast } = useData();

  return (
    <div className="shipping-block">
      <h2 className="page-subhead">Shipping Information</h2>

      <ul>
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
                  payload: {
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
                  },
                })
              }
            >
              {noDetail && (
                <input id={firstname} type="radio" name="address-radio" />
              )}
              <label
                htmlFor={firstname}
                style={{ paddingLeft: noDetail ? "0" : "1.5rem" }}
              >
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
                <div className="div-center">
                  <button
                    className="address-action-btn"
                    onClick={() => editAddress(_id)}
                  >
                    Edit
                  </button>
                  <button
                    className="address-action-btn"
                    onClick={() => {
                      addressDispatch({
                        type: FORM_ACTION_TYPE.DELETE_ADDRESS,
                        payload: _id,
                      });
                      notifyToast("error", "Address removed!");
                    }}
                  >
                    Remove
                  </button>
                </div>
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
        <span>
          Add {addressState.addresses.length !== 0 ? "new" : ""} address
        </span>
      </div>

      <div style={{ display: addressState.openedAddressForm ? "" : "none" }}>
        <AddressForm addressDispatch={addressDispatch} />
      </div>
    </div>
  );
};
