import React, { useState } from "react";
import { faker } from "@faker-js/faker/locale/en_IN";
import "./addressform.css";
import { BsXLg } from "react-icons/bs";
import { FORM_ACTION_TYPE } from "../../../../reducer/actionType";
import { useData } from "../../../../context/ProductContext";

export const AddressForm = ({ addressDispatch }) => {
  const { notifyToast } = useData();
  const formFields = {
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

  const generateRandomData = () => {
    setFormData({
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      email: faker.internet.email(),
      phone: String(faker.number.int({ min: 1000000000, max: 9999999999 })),
      address: faker.location.streetAddress(),
      pincode: faker.location.zipCode("######"),
      city: faker.location.city(),
      state: faker.location.state(),
      country: "India",
    });
  };

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (formData) => {
    const isFormFilled = Object.values(formData).every(
      (value) => typeof value === "string" && value.trim() !== ""
    );

    if (isFormFilled) {
      addressDispatch({
        type: FORM_ACTION_TYPE.ADD_ADDRESS,
        payload: formData,
      });

      setFormData(formFields);

      addressDispatch({
        type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM,
      });

      notifyToast("success", "New address added!");
    }
  };

  return (
    <div className="form-bg-blur">
      <div className=" address-block">
        <div className="flex-center">
          <h3 className="form-title">New Address</h3>
          <div
            onClick={() =>
              addressDispatch({ type: FORM_ACTION_TYPE.SHOW_ADDRESS_FORM })
            }
          >
            <BsXLg />
          </div>
        </div>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="fname">First name: </label>
              <input
                type="text"
                className="form-input"
                placeholder="Prachi"
                id="fname"
                name="firstname"
                value={formData.firstname}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="lname">Last name: </label>
              <input
                type="text"
                className="form-input"
                placeholder="Sahu"
                id="lname"
                name="lastname"
                value={formData.lastname}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                placeholder="prachi@gmail.com"
                id="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="phone">Phone no:</label>
              <input
                className="form-input"
                placeholder="8374432275"
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="form-input-label">
            <label htmlFor="address">Address:</label>
            <textarea
              className="form-textarea"
              placeholder="4589 Swapnil Groves"
              name="address"
              id="address"
              type="text"
              rows="2"
              value={formData.address}
              onChange={changeHandler}
              required
            ></textarea>
          </div>

          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="pincode">Pincode:</label>
              <input
                className="form-input"
                placeholder="491228"
                id="pincode"
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="city">City: </label>
              <input
                type="text"
                className="form-input form-input-select"
                placeholder="Raipur"
                id="city"
                name="city"
                value={formData.city}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="state">State:</label>
              <input
                type="text"
                className="form-input"
                placeholder="Chhattisgarh"
                id="state"
                name="state"
                value={formData.state}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="form-input-label">
              <label htmlFor="country">Country: </label>
              <input
                type="text"
                className="form-input form-input-select"
                placeholder="India"
                id="country"
                name="country"
                value={formData.country}
                onChange={changeHandler}
                required
              />
            </div>
          </div>
          <div className="form-btn">
            <button
              className="form-btn-light"
              onClick={() => setFormData(formFields)}
            >
              Reset
            </button>
            <button
              className="form-btn-light"
              onClick={() => generateRandomData()}
            >
              Random
            </button>

            <button
              type="submit"
              className="form-btn-dark"
              onClick={() => submitHandler(formData)}
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
