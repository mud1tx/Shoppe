import React from "react";
import classes from "./WebsiteFeatures.module.css";
import { FaCheckCircle, FaTruck, FaCreditCard } from "react-icons/fa";

const WebsiteFeatures = () => {
  return (
    <div className={classes["features-container"]}>
      <div className={classes.verifiedContainer}>
        <FaCheckCircle className={classes.verified} />
        <p>
          <strong>Money Guarantee</strong>
        </p>
        <p>7 Days Money Back</p>
      </div>
      <div className={classes.fastDeliveryContainer}>
        <FaTruck className={classes.fastDelivery} />
        <p>
          <strong>Fast Delivery</strong>
        </p>
        <p>Within 3-5 business days</p>
      </div>
      <div className={classes.creditCardContainer}>
        <FaCreditCard className={classes.creditCard} />
        <p>
          <strong>Secure Payments</strong>
        </p>
        <p>All Cards Accepted</p>
      </div>
    </div>
  );
};

export default WebsiteFeatures;
