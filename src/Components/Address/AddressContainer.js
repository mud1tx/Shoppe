import React, { useState } from "react";
import TotalBill from "../TotalBill/TotalBill";
import NavBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import classes from "./AddressContainer.module.css";
import AddressModal from "./AddressModal";
import { useAddress } from "../../contexts/AddressContext";
import AddressCard from "./AddressCard";

const AddressContainer = () => {
  const { addressState } = useAddress();
  const [showModal, setShowModal] = useState(false);
  const cancelModalHandler = () => {
    setShowModal((value) => !value);
  };

  return (
    <div className={classes.addressComponent}>
      <NavBar />
      <div className={classes.checkoutHeading}>
        <h2>Checkout</h2>
      </div>
      <div className={classes["address_bill_Container"]}>
        <div className={classes.addressContainer}>
          <div className={classes.address}>
          <h3>Select Address</h3>
            {addressState.address.map((data) => (
              <AddressCard data={data} key={data.id} />
            ))}
          </div>
          <div className={classes.addressBtn}>
            <button className={classes.addAddressBtn}
              onClick={() => {
                setShowModal((value) => !value);
              }}
            >
              Add Address
            </button>
          </div>
        </div>
        <div className={classes.totalBillContainer}>
          <TotalBill className={classes.totalBill} />
        </div>
      </div>
      {showModal && <AddressModal cancelModal={cancelModalHandler} />}
      <Footer />
    </div>
  );
};

export default AddressContainer;
