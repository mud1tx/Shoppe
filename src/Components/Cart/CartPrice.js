import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./CartPrice.module.css";

const CartPrice = (props) => {
  const navigate = useNavigate();
  const allProductsInCart = props.Items;
  const priceArray = allProductsInCart.map((item) => {
    return item.PRICE * item.VALUE;
  });
  const productValueArray = allProductsInCart.map((item) => {
    return item.VALUE;
  });
  const initialProducts = 0;
  const sumOfProductValues = productValueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialProducts
  );

  const initialValue = 0;
  const sumWithInitial = priceArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  const deliverycharge = sumOfProductValues * 10;
  return (
    <div className={classes.billContainer}>
      <div>
        <h2 className={classes.heading}>Price Details</h2>
      </div>
      <div className={classes.priceContainer}>
        <div>Price ({sumOfProductValues} items):</div>
        <div>$ {sumWithInitial.toFixed(2)}</div>
      </div>
      <div className={classes.deliveryPriceContainer}>
        <div>Delivery Charges:</div>
        <div>$ {deliverycharge}</div>
      </div>
      <div className={classes.totalPriceContainer}>
        <h4>Total Amount:</h4>
        <h4>$ {(sumWithInitial + deliverycharge).toFixed(2)}</h4>
      </div>
      <div>
        <button className={classes.checkoutBtn} onClick={()=>navigate("/address")}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPrice;
