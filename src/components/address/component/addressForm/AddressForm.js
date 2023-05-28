import React from "react";
import { faker } from "@faker-js/faker/locale/en_IN";
import "./addressform.css";
import { BsXLg } from "react-icons/bs";
import { FORM_ACTION_TYPE } from "../../../../reducer/actionType";
import { useClick } from "../../../../context/ClickContext";

export const AddressForm = ({ addressDispatch }) => {
  const { formFields, formData, setFormData, submitHandler } = useClick();

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
    setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
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
              <label htmlFor="useremail">Email:</label>
              <input
                type="email"
                placeholder="prachi@gmail.com"
                id="useremail"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="phones">Phone no:</label>
              <input
                className="form-input"
                placeholder="8374432275"
                type="number"
                id="phones"
                name="phone"
                value={formData.phone}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="form-input-label">
            <label htmlFor="useraddress">Address:</label>
            <textarea
              className="form-textarea"
              placeholder="4589 Swapnil Groves"
              id="useraddress"
              name="address"
              type="text"
              rows="2"
              value={formData.address}
              onChange={changeHandler}
              required
            ></textarea>
          </div>

          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="userpincode">Pincode:</label>
              <input
                className="form-input"
                placeholder="491228"
                id="userpincode"
                type="number"
                name="pincode"
                value={formData.pincode}
                onChange={changeHandler}
                required
              />
            </div>
            <div className="form-input-label">
              <label htmlFor="usercity">City: </label>
              <input
                type="text"
                className="form-input form-input-select"
                placeholder="Raipur"
                id="usercity"
                name="city"
                value={formData.city}
                onChange={changeHandler}
                required
              />
            </div>
          </div>

          <div className="flex-center">
            <div className="form-input-label">
              <label htmlFor="userstate">State:</label>
              <input
                type="text"
                className="form-input"
                placeholder="Chhattisgarh"
                id="userstate"
                name="state"
                value={formData.state}
                onChange={changeHandler}
                required
              />
            </div>

            <div className="form-input-label">
              <label htmlFor="usercountry">Country: </label>
              <input
                type="text"
                className="form-input form-input-select"
                placeholder="India"
                id="usercountry"
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
              onClick={() => setFormData(() => formFields)}
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
              onClick={(e) => submitHandler(e, formData)}
            >
              Add Address
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
