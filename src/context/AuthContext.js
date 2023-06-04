import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "./ProductContext";
import { ACTION_TYPE } from "../reducer/actionType";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const { dispatch, notifyToast } = useData();

  const [userDetail, setUserDetail] = useState({ email: "", password: "" });

  const localStorageToken = JSON.parse(localStorage.getItem("authItems"));
  const [token, setToken] = useState(localStorageToken?.token);
  const [loggedUser, setLoggedUser] = useState(localStorageToken?.user);

  const loginUser = async (input) => {
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
        notifyToast("success", `Welcome back, ${foundUser.firstName}!`);
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
    navigate("/shop");
    dispatch({ type: ACTION_TYPE.CLEAR_FILTER });
    notifyToast("success", "Succesfully Logged Out!");
  };

  const signUpUser = async (input) => {
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
        const { createdUser, encodedToken } = data;

        localStorage.setItem(
          "authItems",
          JSON.stringify({ token: encodedToken, user: createdUser })
        );
        setToken(encodedToken);
        setLoggedUser(createdUser);
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
        setLoggedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
