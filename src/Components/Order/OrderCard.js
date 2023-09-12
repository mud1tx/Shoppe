import React from "react";
import classes from "./OrderCard.module.css";
import { NavLink } from "react-router-dom";

const OrderCard = (props) => {
  const { cart, selectedAddress } = props.data;
  const allProductsInCart = cart;
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
    <div className={classes.orderCard}>
      <div>
        <div className={classes.orderId}>
          <p>
            <strong>Order ID: </strong>
          </p>
          <p>{(Math.random() * 10000000000).toFixed(0)}</p>
        </div>
        <div className={classes.amount}>
          <p>
            <strong>Amount Paid: </strong>
          </p>
          <p>{$ (sumWithInitial + deliverycharge).toFixed(0)}</p>
        </div>
        <div className={classes.address}>
          <p>
            <strong>Address: </strong>
          </p>
          <div className={classes.addressDetailInfo}>
            <p>
              {selectedAddress.name},{selectedAddress.street},
            </p>
            <p>
              {selectedAddress.city}-{selectedAddress.zipcode},
            </p>
            <p>
              {selectedAddress.state},{selectedAddress.country}
            </p>
          </div>
        </div>
      </div>
      <div className={classes.allOrderProducts}>
        <p>
          <strong>Products Ordered: </strong>
        </p>
        {cart.map((item) => (
          <div key={Math.random() * 1000} className={classes.itemContainer}>
            <NavLink className={classes.links} to={`/products/${item.ID}`}>
              <img className={classes.image} src={item.IMAGE} alt="" />
            </NavLink>
            <div className={classes.itemData}>
              <p>{item.TITLE}</p>
              <p>
                <strong>Price: </strong> {item.PRICE}
              </p>
              <p>
                <strong>Quantity: </strong> {item.VALUE}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
