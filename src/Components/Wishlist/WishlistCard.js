import React from "react";
import { useWishlistProducts } from "../../contexts/WishlistContext";
import classes from "./WishlistCard.module.css";
import { useCartProducts } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const WishlistCard = (props) => {
  const { ID, TITLE, IMAGE, PRICE, CATEGORY, DESCRIPTION } = props.Item;
  const { state, dispatch } = useCartProducts();
  const {  wishlistdispatch } = useWishlistProducts();
  const navigate = useNavigate();

  const itemInCart = state.cart.find((item) => item.ID === ID);

  return (
    <div className={classes.wishlistProduct}>
      <div className={classes.image}>
        <img src={IMAGE} alt="" />
      </div>
      <div className={classes.productDetail}>
        <p>{TITLE}</p>
        <h3>${PRICE}</h3>
        <button
          className={classes.addToCart}
          onClick={() => {
            itemInCart
              ? navigate("/cart")
              : dispatch({
                  type: "ADD_TO_CART",
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
                if (!itemInCart) {
                  toast.success(" Added to Cart", {
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
          {itemInCart ? "Go To Cart" : "Add To Cart"}
        </button>
        <button
          className={classes.removeFromWishlist}
          onClick={() => {
            wishlistdispatch({ type: "REMOVE_FROM_WISHLIST", payload: ID });
            toast.success(" Product Removed from Wishlist", {
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
          Remove from Wishlist
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
