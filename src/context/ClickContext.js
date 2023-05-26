import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useAuth } from "./AuthContext";
import { useData } from "./ProductContext";
import { AddressReducer } from "../components/address/component/AddressReducer";
import { FORM_ACTION_TYPE } from "../reducer/actionType";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const { token, loggedUser } = useAuth();
  const { notifyToast } = useData();

  const [cartData, setCartData] = useState(loggedUser?.cart);
  const [wishlistData, setWishlistData] = useState(loggedUser?.wishlist);

  useEffect(() => {
    if (!token) {
      setCartData(null);
      setWishlistData(null);
    } else {
      getCartData();
      getWishData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    getCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      }
    } catch (e) {
      console.error("Error:", e);
    }
  };

  useEffect(() => {
    getCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

        notifyToast("error", "Removed from Wishlist!");
      }
    } catch (e) {
      console.error("Error:", e);
      notifyToast("error", "An error occurred. Please try again later!");
    }
  };

  //address form

  const formFields = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  };

  const [formData, setFormData] = useState(formFields);

  //checkout address

  const initialStateAddress = {
    addresses: [],
    selectedAddress: null,
    openedAddressForm: false,
  };

  const [addressState, addressDispatch] = useReducer(
    AddressReducer,
    initialStateAddress
  );

  //submit address

  const submitHandler = (e, formData) => {
    e.preventDefault();
    const isFormFilled = Object.values(formData).every(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    const idMatch = formData?._id;

    if (isFormFilled && !idMatch) {
      addressDispatch({
        type: FORM_ACTION_TYPE.ADD_ADDRESS,
        payload: formData,
      });

      setFormData(formFields);

      addressDispatch({
        type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM,
      });

      notifyToast("success", "New address added!");
    } else {
      addressDispatch({
        type: FORM_ACTION_TYPE.UPDATE_ADDRESS,
        payload: formData,
      });

      addressDispatch({
        type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM,
      });

      notifyToast("success", "Address updated!");
    }
  };

  //edit address

  const editAddress = (id) => {
    addressDispatch({
      type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM,
    });

    const findAddress = addressState.addresses.find((item) => item._id === id);

    setFormData(findAddress);
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
        formFields,
        formData,
        setFormData,
        addressState,
        addressDispatch,
        submitHandler,
        editAddress,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
