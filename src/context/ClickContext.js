import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useData } from "./ProductContext";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const { notifyToast } = useData();

  const { token } = useAuth();

  const getCartData = async () => {
    try {
      const res = await fetch("/api/user/cart", {
        method: "GET",
        headers: { authorization: token },
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setCartData(dataFetched?.cart);
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
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  const updateCartDataQty = async (id, typeClicked) => {
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
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  console.log(cartData);

  return (
    <ClickContext.Provider
      value={{ cartData, postCartData, updateCartDataQty }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
