import StripeCheckout from "react-stripe-checkout";
import React, { useEffect, useState } from "react";
import classes from "./TotalBill.module.css";
import { useCartProducts } from "../../contexts/CartContext";
import { useSelectAddress } from "../../contexts/SelectedAddressContext";
import { useOrders } from "../../contexts/OrdersContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TotalBill = () => {
  const { state, dispatch } = useCartProducts();
  const allProductsInCart = state.cart;
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
  const amt = (sumWithInitial + deliverycharge).toFixed(2);
  const strAmt = `${amt}`;
  const [product, setProduct] = useState({
    name: "SHOPPE",
    price: strAmt,
    productBy: "SHOPPE",
  });
  const navigate = useNavigate();
  const { ordersdispatch } = useOrders();
  const { selectAddressState } = useSelectAddress();
  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      // const response = await fetch("http://localhost:8282/checkout", {
        const response = await fetch(
          "https://ry7v05l6on.sse.codesandbox.io/checkout",
          {
            method: "POST",
            headers,
            body: JSON.stringify(body),
          }
        );
      if (response.ok) {
        ordersdispatch({
          type: "ADD_ORDER",
          payload: {
            id: new Date().getTime().toString(),
            cart: state.cart,
            selectedAddress: selectAddressState.selectedAddress,
          },
        });
        toast.success(" Order Placed Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(" Order Placed Successfully", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      dispatch({
        type: "REMOVE_ALL",
      });
      navigate("/logout/orders");
    } catch (error) {
      return console.log(error);
    }
  };
  const [btnDisable, setBtnDisable] = useState();

  useEffect(() => {
    if (selectAddressState.selectedAddress !== null) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  }, [selectAddressState.selectedAddress]);
  return (
    <div className={classes.billContainer}>
      <div className={classes.OrderSummaryHeading}>
        <h3>Order Summary</h3>
      </div>
      <div className={classes.detail}>
        <div className={classes.OrderSummary}>
          {state.cart.map((item) => (
            <div className={classes.item} key={item.ID}>
              <p>
                {item.TITLE}{" "}
                <span>
                  ({item.PRICE} * {item.VALUE})
                </span>
              </p>
              <p>${item.PRICE * item.VALUE}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className={classes.priceDetailHeading}>Price Details</h3>
      </div>
      <div className={classes.detail}>
        <div className={classes.priceContainer}>
          <p>Price ({sumOfProductValues} items):</p>
          <p>$ {sumWithInitial.toFixed(2)}</p>
        </div>
        <div className={classes.deliveryPriceContainer}>
          <p>Delivery Charges:</p>
          <p>$ {deliverycharge}</p>
        </div>
        <div className={classes.totalPriceContainer}>
          <p>Total Amount:</p>
          <p>$ {(sumWithInitial + deliverycharge).toFixed(2)}</p>
        </div>
      </div>
      <div className={classes.deliverToHeading}>
        <h3>Deliver To</h3>
      </div>
      <div className={classes.detail}>
        {selectAddressState.selectedAddress !== null ? (
          <div className={classes.deliverTo}>
            <p>
              <span>{selectAddressState.selectedAddress.name}</span>
            </p>
            <p>
              {selectAddressState.selectedAddress.street}{" "}
              {selectAddressState.selectedAddress.city} -{" "}
              {selectAddressState.selectedAddress.zipcode}
            </p>
            <p>
              {selectAddressState.selectedAddress.state},{" "}
              {selectAddressState.selectedAddress.country}
            </p>
            <p>{selectAddressState.selectedAddress.mobile}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <div className={classes.placeOrderBtn}>
        <StripeCheckout
          stripeKey="pk_test_51LO0nNSBfCKAZDAkKq9TINx0QylNNPZB2VuFPQwLPnlRudxwz0x0PPTAl3I3SVjp6479PpXtgkTswBseoBwm8MWk002drvO5f4"
          token={makePayment}
          image="https://picsum.photos/seed/picsum/200/300"
          name="SHOPPE"
          amount={product.price * 100}
        >
          <button disabled={btnDisable}>Place Order</button>
        </StripeCheckout>
      </div>
    </div>
  );
};

export default TotalBill;