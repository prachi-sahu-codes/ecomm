import { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("./api/categories");
      const dataFetched = await res.json();
      setCategories(dataFetched?.categories);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(categories);

  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCatg = () => useContext(CategoryContext);
