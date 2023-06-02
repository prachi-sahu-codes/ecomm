import { ACTION_TYPE } from "./actionType";

export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SEARCH: {
      return { ...state, searchTerm: action.payload };
    }
    case ACTION_TYPE.CLEAR_FILTER: {
      return {
        priceRange: "40000",
        checkboxCatg: [],
        radioRating: "",
        sortBy: "relevance",
        searchTerm: "",
      };
    }
    case ACTION_TYPE.PRICE_RANGE: {
      return { ...state, priceRange: action.payload };
    }
    case ACTION_TYPE.CHECKBOX_CATG: {
      const checkPresence = state.checkboxCatg.indexOf(action.payload);
      if (checkPresence !== -1) {
        const filterCatg = state.checkboxCatg.filter(
          (catg) => catg !== action.payload
        );
        return { ...state, checkboxCatg: filterCatg };
      } else {
        return {
          ...state,
          checkboxCatg: [...state.checkboxCatg, action.payload],
        };
      }
    }
    case ACTION_TYPE.RADIO_RATING: {
      return { ...state, radioRating: action.payload };
    }

    case ACTION_TYPE.SORT_SELECT: {
      return { ...state, sortBy: action.payload };
    }

    default: {
      return state;
    }
  }
};
