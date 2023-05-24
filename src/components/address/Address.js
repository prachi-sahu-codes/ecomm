import React, { useReducer } from "react";
import {} from "react-icons/bs";
import { AddressReducer } from "./component/AddressReducer";
import { AddressForm } from "./component/addressForm/AddressForm";
import { FORM_ACTION_TYPE } from "../../reducer/actionType";
import "../../App.css";

export const Address = () => {
  const initialStateAddress = {
    addresses: [
      {
        _id: "e6958a52-9b2b-4bb0-9d5d-1fbfafdcfa14",
        firstname: "Aditya",
        lastname: "Suthar",
        email: "aditya66r@hotmail.com",
        phone: 1090350443,
        address: "6260 Umang Ridges",
        pincode: "610229",
        state: "Meghalaya",
        city: "Warhapur",
        country: "India",
      },
    ],
    selectedAddress: null,
    openedAddressForm: false,
  };
  const [addressState, addressDispatch] = useReducer(
    AddressReducer,
    initialStateAddress
  );

  console.log(addressState);

  return (
    <div>
      <h2 className="page-subhead">Shipping Address</h2>
      <button
        onClick={() =>
          addressDispatch({ type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM })
        }
      >
        Click me
      </button>

      <div style={{ display: addressState.openedAddressForm ? "" : "none" }}>
        <AddressForm addressDispatch={addressDispatch} />
      </div>
    </div>
  );
};
