import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { ACTION_TYPE } from "../backend/utils/actionType";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("./api/products");
      const dataFetched = await res.json();
      setData(dataFetched?.products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const initialState = {
    priceRange: "20000",
    checkboxCatg: [],
    radioRating: "",
    sortBy: "",
  };

  const productReducer = (state, action) => {
    switch (action.type) {
      case ACTION_TYPE.CLEAR_FILTER: {
        return { state };
      }
      case ACTION_TYPE.PRICE_RANGE: {
        return { ...state, priceRange: action.payload };
      }
      case ACTION_TYPE.CHECKBOX_CATG: {
        const checkPresence = state.checkboxCatg.indexOf(action.payload);
        console.log("called", checkPresence, action.payload);
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
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredList = data.filter(
    (product) =>
      product?.price <= state.priceRange &&
      (state.checkboxCatg.length > 0
        ? state.checkboxCatg.includes(product?.category)
        : true) &&
      (state.radioRating !== ""
        ? product?.rating >= Number(state.radioRating)
        : true)
  );

  console.log(state.radioRating);

  return (
    <ProductContext.Provider value={{ data, state, dispatch, filteredList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useData = () => useContext(ProductContext);
