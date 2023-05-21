import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./ProductContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { notifyToast } = useData();

  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

  const loginUser = async (input) => {
    console.log(input);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        const { foundUser, encodedToken } = data;
        localStorage.setItem(
          "authItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setLoggedUser(foundUser);
        navigate("../shop");
        notifyToast("success", "Succesfully Logged In!");
      } else {
        notifyToast("error", "Something is Wrong!");
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("authItems");
    setToken(null);
    setLoggedUser(null);
    navigate("/");
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
      if (res.status === 200 || res.status === 201) {
        const data = await res.json();
        const { foundUser, encodedToken } = data;
        localStorage.setItem(
          "authItems",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
        setToken(encodedToken);
        setLoggedUser(foundUser);
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
      value={{
        userDetail,
        setUserDetail,
        loginUser,
        logoutHandler,
        signUpUser,
        token,
        loggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);