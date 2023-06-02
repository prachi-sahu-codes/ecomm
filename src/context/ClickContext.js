import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import { useAuth } from "./AuthContext";
import { useData } from "./ProductContext";
import { AddressReducer } from "../components/address/component/AddressReducer";
import { FORM_ACTION_TYPE } from "../reducer/actionType";
import { useNavigate } from "react-router-dom";

const ClickContext = createContext();

export const ClickProvider = ({ children }) => {
  const navigate = useNavigate();
  const { token, loggedUser } = useAuth();
  const { notifyToast } = useData();
  const [cartData, setCartData] = useState(loggedUser?.cart);
  const [wishlistData, setWishlistData] = useState(loggedUser?.wishlist);

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
    getWishData();
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

  //checkout address

  const initialStateAddress = {
    addresses: [
      {
        _id: "e6958a52-9b2b-4bb0-9d5d-1fbfafdcfa14",
        firstname: "Aditya",
        lastname: "Suthar",
        email: "aditya66r@hotmail.com",
        phone: 1090350443,
        address: "6260 Umang Ridges",
        pincode: "210229",
        state: "Meghalaya",
        city: "Warhapur",
        country: "India",
      },
    ],
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

  //coupon

  const totalPrice = cartData
    ?.reduce((acc, item) => acc + item.price * item.qty, 0)
    .toFixed(2);

  const [coupon, setCoupon] = useState({ code: "", discount: totalPrice });

  //final order

  const [finalOrder, setFinalOrder] = useState({
    delivery: "",
    address: addressState.selectedAddress,
  });

  const [finalSummary, setFinalSummary] = useState([]);

  //payment gateway

  const loadScript = (url) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (price) => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      alert("Razorpay SDK failed to load, check you internet connection");
      return;
    }
    const options = {
      key: "rzp_test_Xw6VvTBEToiwQk",
      amount: Number(price) * 100,
      currency: "INR",
      name: "FURN",
      description: "Thank you for shopping with us",
      handler: function () {
        const shortUuid = uuid().replace(/-/g, "").slice(0, 12).toUpperCase();

        const orderDate = new Date().toLocaleDateString("en-us", {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        });

        const orderSaving = coupon.code
          ? (totalPrice - coupon.discount).toFixed(2)
          : "none";

        setFinalSummary((f) => [
          ...f,
          {
            id: "FURN-" + shortUuid,
            date: orderDate,
            delivery: finalOrder.delivery,
            address: finalOrder.address,
            cartitems: cartData,
            totalPrice: price,
            savings: orderSaving,
          },
        ]);

        setFinalOrder({
          delivery: "",
          address: addressState.selectedAddress,
        });

        cartData.map(({ _id }) => deleteCartItem(_id));
        notifyToast("success", `Payment of ₹${price} is Succesful`);
        setTimeout(() => {
          navigate("../shop");
        }, 500);
        setCoupon(() => ({ code: "", discount: totalPrice }));

        // setTimeout(() => {
        //   console.log("Success");
        //   // navigate("/");
        // }, 4000);
      },
      theme: {
        color: "#661f1e",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  //make order btn

  const orderSubmitHandler = () => {
    if (finalOrder.delivery && finalOrder.address) {
      const finalOrderPrice = coupon.code ? coupon.discount : totalPrice;

      console.log(finalOrderPrice);
      displayRazorpay(finalOrderPrice);
    } else if (!finalOrder.delivery) {
      notifyToast("error", "Select delivery option to proceed!");
    } else if (!finalOrder.address) {
      notifyToast("error", "Select an address to proceed!");
    } else {
      console.log("Error");
      notifyToast("error", "Something is wrong!");
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
        formFields,
        formData,
        setFormData,
        addressState,
        addressDispatch,
        submitHandler,
        editAddress,
        totalPrice,
        coupon,
        setCoupon,
        setFinalOrder,
        orderSubmitHandler,
        finalSummary,
      }}
    >
      {children}
    </ClickContext.Provider>
  );
};

export const useClick = () => useContext(ClickContext);
