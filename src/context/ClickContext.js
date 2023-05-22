import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useData } from "./ProductContext";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const { token } = useAuth();
  const { notifyToast } = useData();

  const [cartData, setCartData] = useState([]);
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    if (!token) {
      setCartData(null);
    } else {
      setCartData(() => localStorageCart);
    }
  }, [token]);

  const getCartData = async () => {
    try {
      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: { authorization: token },
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setCartData(dataFetched?.cart);
        localStorage.setItem("cartItems", JSON.stringify(dataFetched?.cart));
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const postCartData = async (input) => {
    try {
      const res = await fetch("/api/user/cart", {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: input }),
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setCartData(dataFetched?.cart);
        notifyToast("success", "Added to Cart!");
        localStorage.setItem("cartItems", JSON.stringify(dataFetched?.cart));
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  const updateCartItemQty = async (id, typeClicked) => {
    try {
      const res = await fetch(`/api/user/cart/${id}`, {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action: { type: typeClicked } }),
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setCartData(dataFetched?.cart);
        localStorage.setItem("cartItems", JSON.stringify(dataFetched?.cart));
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  const deleteCartItem = async (id) => {
    try {
      const res = await fetch(`/api/user/cart/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setCartData(dataFetched?.cart);
        localStorage.setItem("cartItems", JSON.stringify(dataFetched?.cart));
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  return (
    <ClickContext.Provider
      value={{
        cartData,
        setCartData,
        postCartData,
        updateCartItemQty,
        deleteCartItem,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
