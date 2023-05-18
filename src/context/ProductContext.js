import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { productReducer } from "../reducer/ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      setLoading(true);
      const res = await fetch("./api/products");
      const dataFetched = await res.json();
      setData(dataFetched?.products);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
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
    searchTerm: "",
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const filteredList = data.filter(
    (product) =>
      product?.price <= state.priceRange &&
      (state.checkboxCatg.length > 0
        ? state.checkboxCatg.includes(product?.category)
        : true) &&
      (state.radioRating > 0 ? product?.rating >= state.radioRating : true) &&
      (state.searchTerm.length > 0
        ? product?.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        : true)
  );

  const sortedList =
    state.sortBy !== "" || state.sortBy === "relevance"
      ? filteredList.sort((a, b) => {
          if (state.sortBy === "bestSell") {
            return b.sales - a.sales;
          } else if (state.sortBy === "HTL") {
            return b.price - a.price;
          } else if (state.sortBy === "LTH") {
            return a.price - b.price;
          }
        })
      : filteredList;

  return (
    <ProductContext.Provider
      value={{ data, loading, state, dispatch, filteredList, sortedList }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useData = () => useContext(ProductContext);
