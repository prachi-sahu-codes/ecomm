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
      return state;
    }
    case FORM_ACTION_TYPE.DELETE_ADDRESS: {
      return state;
    }
    case FORM_ACTION_TYPE.SHOW_ADDRESS_FORM: {
      return { ...state, openedAddressForm: !state.openedAddressForm };
    }
    default: {
      return state;
    }
  }
};
