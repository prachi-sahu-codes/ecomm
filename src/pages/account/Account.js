import React from "react";
import "./account.css";
import { useAuth } from "../../context/AuthContext";

export const Account = () => {
  const { signUpUser } = useAuth();
  return (
    <div
      className="account"
      style={{
        paddingTop: "10rem",
      }}
    >
      <button
        onClick={() =>
          signUpUser({
            email: "abc@gmail.com",
            password: "1234",
            someUserAttribute1: "john",
            someUserAttribute2: "cena",
          })
        }
      >
        sign up
      </button>
    </div>
  );
};
