import React from "react";
import classes from "./CartCard.module.css";
import { useCartProducts } from "../../contexts/CartContext";
import { useWishlistProducts } from "../../contexts/WishlistContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const CartCard = (props) => {
  const { dispatch } = useCartProducts();
  const { wishlistState, wishlistdispatch } = useWishlistProducts();
  const { ID, IMAGE, VALUE, TITLE, PRICE, CATEGORY, DESCRIPTION } = props.Item;
  const navigate = useNavigate();

  const itemInWishlist = wishlistState.wishlist.find((item) => item.ID === ID);
  return (
    <div className={classes.cartProduct}>
      <div className={classes.image}>
        <img src={IMAGE} alt="" />
      </div>
      <div className={classes.productDetail}>
        <p>{TITLE}</p>
        <h3>$ {PRICE}</h3>
        <p>
          Quantity:{" "}
          <button
            className={classes.decrementer}
            onClick={() => {
              dispatch({
                type: "DECREMENT_PRODUCT_VALUE",
                payload: props.Item.ID,
              });
              toast.success("Updated product quantity! ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            -
          </button>
          <span
            className={classes.valueContainer}
            style={{ marginLeft: ".5rem", marginRight: ".5rem" }}
          >
            {" "}
            {VALUE}{" "}
          </span>
          <button
            className={classes.incrementer}
            onClick={() => {
              dispatch({
                type: "INCREMENT_PRODUCT_VALUE",
                payload: props.Item.ID,
              });
              toast.success("Updated product quantity! ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }}
          >
            +
          </button>
        </p>
        <button
          className={classes.toWishlistBtn}
          onClick={() => {
            itemInWishlist
              ? navigate("/wishlist")
              : wishlistdispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: {
                    ID: ID,
                    PRICE: PRICE,
                    CATEGORY: CATEGORY,
                    DESCRIPTION: DESCRIPTION,
                    IMAGE: IMAGE,
                    TITLE: TITLE,
                    VALUE: 1,
                  },
                });
            if (!itemInWishlist) {
              toast.success(" Added to Wishlist", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }}
        >
          {itemInWishlist ? "Go To Wishlist" : "Add To Wishlist"}
        </button>
        <button
          className={classes.removeCartBtn}
          onClick={() => {
            dispatch({ type: "REMOVE_FROM_CART", payload: props.Item.ID });
            toast.success(" Product Removed from Cart", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }}
        >
          remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CartCard;
