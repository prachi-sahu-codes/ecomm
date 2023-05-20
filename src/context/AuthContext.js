import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./ProductContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetail, setUserDetail] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { notifyToast } = useData();

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
        notifyToast("success", "Succesfully Logged In!");
      } else {
        notifyToast("error", "Something is Wrong!");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const signUpUser = async (input) => {
    console.log("first");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (res.status === 201) {
        const data = await res.json();
        const token = data.encodedToken;
        localStorage.setItem("token", token);
        navigate("../shop");
        notifyToast("success", "Succesfully Signed Up!");
      } else {
        notifyToast("error", "Something is Wrong!");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{ userDetail, setUserDetail, loginUser, signUpUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
