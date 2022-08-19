import React, { useEffect } from "react";
import classes from "./CartContainer.module.css";
import { useCartProducts } from "../../contexts/CartContext";
import NavBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import CartCard from "./CartCard";
import CartPrice from "./CartPrice";
import { NavLink } from "react-router-dom";

const CartContainer = () => {
  const { state } = useCartProducts();

  const cartProducts = state.cart;

  const productValueArray = cartProducts.map((item) => {
    return item.VALUE;
  });
  const initialProducts = 0;
  const sumOfProductValues = productValueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialProducts
  );
  return (
    <div className={classes.cartContainer}>
      <NavBar />
      <div className={classes.cartWrapper}>
        <div>
          <h2 className={classes.heading}>My Cart ({sumOfProductValues})</h2>
        </div>
        <div className={classes["cartProduct-price-container-wrapper"]}>
          {cartProducts.length > 0 ? (
            <div className={classes["cartProduct-price-container"]}>
              <div className={classes.cartProducts}>
                {cartProducts.map((cartItem) => (
                  <CartCard key={cartItem.ID} Item={cartItem} />
                ))}
              </div>
              <div className={classes.billContainer}>
                <CartPrice Items={cartProducts} />
              </div>
            </div>
          ) : (
            <div className={classes["no_products"]}>
              <p>Oops you have nothing in your cart</p>
              <div>
                <NavLink style={{ color: "purple" }} to={"/products"}>
                  Go To Shop
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartContainer;
