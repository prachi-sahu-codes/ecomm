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

  // const sortedList = filteredList.sort((a,b)=>{
  //   if(state.sortBy)
  // });

  return (
    <ProductContext.Provider value={{ data, state, dispatch, filteredList }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useData = () => useContext(ProductContext);
