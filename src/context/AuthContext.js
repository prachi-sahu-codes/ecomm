import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("./api/auth/login");
      const dataFetched = await res.json();
      setCategories(dataFetched?.categories);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AuthContext.Provider value={{ categories }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
