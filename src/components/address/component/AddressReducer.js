import { v4 as uuid } from "uuid";
import { FORM_ACTION_TYPE } from "../../../reducer/actionType";

export const AddressReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case FORM_ACTION_TYPE.ADD_ADDRESS: {
      console.log(state);
      return {
        ...state,
        addresses: [...state.addresses, { _id: uuid(), ...action.payload }],
      };
    }
    case FORM_ACTION_TYPE.UPDATE_ADDRESS: {
      return state;
    }
    case FORM_ACTION_TYPE.DELETE_ADDRESS: {
      return state;
    }
    case FORM_ACTION_TYPE.SHOW_ADDRESS_FORM: {
      console.log(state);
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
