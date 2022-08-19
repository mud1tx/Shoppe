import React, { useState } from "react";
import classes from "./AddressModal.module.css";
import { useAddress } from "../../contexts/AddressContext";
import { toast } from "react-toastify";

const AddressModal = (props) => {
  const { addressdispatch} = useAddress();
  const [zipcodeError, setzipCodeError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [userAddress, setUserAddress] = useState({
    name: "",
    street: "",
    city: "",
    zipcode: "",
    state: "",
    country: "",
    mobile: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "zipcode") {
      if (value.length < 6) {
        setzipCodeError(true);
      } else {
        setzipCodeError(false);
      }
    }

    if (name === "mobile") {
      if (value.length < 10) {
        setMobileError(true);
      } else {
        setMobileError(false);
      }
    }

    setUserAddress({ ...userAddress, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(" Address Added", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const newAddress = { ...userAddress, id: new Date().getTime().toString() };
    addressdispatch({ type: "ADD_ADDRESS", payload: newAddress });
    setUserAddress({
      name: "",
      street: "",
      city: "",
      zipcode: "",
      state: "",
      country: "",
      mobile: "",
    });
    props.cancelModal();
  };

  return (
    <>
      <div
        className={classes.modalBackground}
        onClick={() => {
          props.cancelModal();
        }}
      ></div>
      <div className={classes.modal}>
        <div>
          <h4>Add New Address</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={classes.inputDetails}>
            <input
              type="text"
              value={userAddress.name}
              autoComplete="off"
              name="name"
              placeholder="Name"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            <input
              type="text"
              value={userAddress.street}
              autoComplete="off"
              name="street"
              placeholder="Street"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            <input
              type="text"
              value={userAddress.city}
              autoComplete="off"
              name="city"
              placeholder="City"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            {zipcodeError && (
              <p className={classes.errorMessage}>
                Input should be greater than 6
              </p>
            )}
            <input
              type="number"
              value={userAddress.zipcode}
              autoComplete="off"
              name="zipcode"
              placeholder="Zipcode"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            <input
              type="text"
              value={userAddress.state}
              autoComplete="off"
              name="state"
              placeholder="State"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            <input
              type="text"
              value={userAddress.country}
              autoComplete="off"
              name="country"
              placeholder="Country"
              onChange={handleInput}
            />
          </div>
          <div className={classes.inputDetails}>
            {mobileError && (
              <p className={classes.errorMessage}>
                Input should be greater than 10
              </p>
            )}
            <input
              type="number"
              value={userAddress.mobile}
              autoComplete="off"
              name="mobile"
              placeholder="Mobile"
              onChange={handleInput}
            />
          </div>
          <div className={classes.btns}>
            {Object.values(userAddress).every((value) => value.length > 0) &&
            !zipcodeError &&
            !mobileError ? (
              <button className={classes.addBtn} type="submit">
                Add
              </button>
            ) : (
              <button className={classes.addBtn} type="submit" disabled>
                Add
              </button>
            )}
            <button
              className={classes.cancelBtn}
              onClick={() => {
                props.cancelModal();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddressModal;
