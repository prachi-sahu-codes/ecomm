import React, { useReducer } from "react";
import {
  AddressReducer,
  initialStateAddress,
} from "./component/AddressReducer";
import { AddressForm } from "./component/addressForm/AddressForm";

export const Address = () => {
  const [addressState, addressDispatch] = useReducer(
    AddressReducer,
    initialStateAddress
  );
  return (
    <div>
      <h2>Shipping Address</h2>
      <div>
        <AddressForm />
      </div>
    </div>
  );
};
