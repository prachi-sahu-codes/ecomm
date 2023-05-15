import { createContext, useContext, useEffect, useState } from "react";

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

  return (
    <ProductContext.Provider value={{ data }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useData = () => useContext(ProductContext);
