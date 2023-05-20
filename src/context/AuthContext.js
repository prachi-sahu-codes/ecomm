import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const loginUser = async (input) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (res.status === 200) {
        const data = await res.json();
        const token = data.encodedToken;
        localStorage.setItem("token", token);
        navigate("../shop");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <AuthContext.Provider value={{ userDetail, setUserDetail, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
