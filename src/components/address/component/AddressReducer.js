import { v4 as uuid } from "uuid";
import { FORM_ACTION_TYPE } from "../../../reducer/actionType";

export const AddressReducer = (state, action) => {
  switch (action.type) {
    case FORM_ACTION_TYPE.ADD_ADDRESS: {
      return {
        ...state,
        addresses: [...state.addresses, { _id: uuid(), ...action.payload }],
      };
    }

    case FORM_ACTION_TYPE.UPDATE_ADDRESS: {
      const addressIndex = state.addresses.findIndex(
        (item) => item._id === action.payload._id
      );

      if (addressIndex === -1) {
        console.log("Address not found for update");
        return state;
      }

      const updatedAddresses = [
        ...state.addresses.slice(0, addressIndex),
        action.payload,
        ...state.addresses.slice(addressIndex + 1),
      ];

      return {
        ...state,
        addresses: updatedAddresses,
      };
    }

    case FORM_ACTION_TYPE.DELETE_ADDRESS: {
      console.log("in delete")
      const filterAddress = state.addresses.filter(
        (item) => item._id !== action.payload
      );
      return { ...state, addresses: [...filterAddress] };
    }

    case FORM_ACTION_TYPE.SHOW_ADDRESS_FORM: {
      return { ...state, openedAddressForm: !state.openedAddressForm };
    }

    case FORM_ACTION_TYPE.SELECT_ADDRESS_FORM: {
      return { ...state, selectedAddress: action.payload };
    }

    default: {
      return state;
    }
  }
};
