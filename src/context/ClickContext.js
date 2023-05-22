import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useData } from "./ProductContext";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const { token } = useAuth();
  const { notifyToast } = useData();

  const [cartData, setCartData] = useState([]);
  const [wishlistData, setWishlistData] = useState([]);
  const localStorageCart = JSON.parse(localStorage.getItem("cartItems"));
  const localStorageWishlist = JSON.parse(
    localStorage.getItem("wishlistItems")
  );

  useEffect(() => {
    if (!token) {
      setCartData(null);
      setWishlistData(null);
    } else {
      setCartData(() => localStorageCart);
      setWishlistData(() => localStorageWishlist);
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
        notifyToast("error", "Removed from Cart!");
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  //wishlist

  const getWishData = async () => {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "GET",
        headers: { authorization: token },
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setWishlistData(dataFetched?.wishlist);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(dataFetched?.wishlist)
        );
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const postWishData = async (input) => {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ product: input }),
      });
      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setWishlistData(dataFetched?.wishlist);
        notifyToast("success", "Added to Wishlist!");
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(dataFetched?.wishlist)
        );
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  const deleteWishItem = async (id) => {
    try {
      const res = await fetch(`/api/user/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          authorization: token,
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200 || res.status === 201) {
        const dataFetched = await res.json();
        setWishlistData(dataFetched?.wishlist);
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(dataFetched?.wishlist)
        );
        notifyToast("error", "Removed from Wishlist!");
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
        wishlistData,
        setWishlistData,
        getWishData,
        postWishData,
        deleteWishItem,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
