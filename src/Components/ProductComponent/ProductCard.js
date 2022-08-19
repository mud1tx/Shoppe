import React from "react";
import classes from "./ProductCard.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartProducts } from "../../contexts/CartContext";
import { useWishlistProducts } from "../../contexts/WishlistContext";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const { state, dispatch } = useCartProducts();
  const { wishlistState, wishlistdispatch } = useWishlistProducts();

  const { id, title, image, price, category, description } = props.item;
  const navigate = useNavigate();
  const itemInCart = state.cart.find((item) => item.ID === id);
  const itemInWishlist = wishlistState.wishlist.find((item) => item.ID === id);
  return (
    <div key={id} id={id} className={classes.card}>
      <NavLink className={classes.links} to={`/products/${id}`}>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
      </NavLink>
      <div className={classes.content}>
        <div className={classes.header}>{title}</div>
        <div className={classes.price}>${price}</div>
        <div className={classes.category}>{category}</div>
        <button
          className={classes.addWishlistBtn}
          onClick={() => {
            console.log("itemInWishlist", itemInWishlist);
            itemInWishlist
              ? navigate("/wishlist")
              : wishlistdispatch({
                  type: "ADD_TO_WISHLIST",
                  payload: {
                    ID: id,
                    PRICE: price,
                    CATEGORY: category,
                    DESCRIPTION: description,
                    IMAGE: image,
                    TITLE: title,
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
          className={classes.addCartBtn}
          onClick={() => {
            itemInCart
              ? navigate("/cart")
              : dispatch({
                  type: "ADD_TO_CART",
                  payload: {
                    ID: id,
                    PRICE: price,
                    CATEGORY: category,
                    DESCRIPTION: description,
                    IMAGE: image,
                    TITLE: title,
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
      </div>
    </div>
  );
};

export default ProductCard;
