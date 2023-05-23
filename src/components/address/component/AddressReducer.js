import React from "react";

export const AddressReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const initialStateAddress = { addresses: [], selectedAddress: null };
