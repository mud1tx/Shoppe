import React, { useState } from "react";
import classes from "./NavigationBar.module.css";
import { FaHeart, FaShoppingCart, FaUserAlt, FaBars } from "react-icons/fa";
import { useNavigate, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { filterSearchInput } from "../../redux/actions/filterActions";
import { useCartProducts } from "../../contexts/CartContext";
import { useWishlistProducts } from "../../contexts/WishlistContext";

const NavigationBar = () => {
  const { state } = useCartProducts();
  const { wishlistState } = useWishlistProducts();
  const dispatch = useDispatch();
  const [showMediaIcons, setShowMediaIcons] = useState(classes.icons);
  const navToggle = () => {
    showMediaIcons === classes.icons
      ? setShowMediaIcons(`${classes.icons} ${classes["icons-active"]}`)
      : setShowMediaIcons(classes.icons);
  };
  const navigate = useNavigate();

  const userProfileHandler = () => {
    navigate("/logout");
  };

  const onChangeFilterHandler = (event) => {
    dispatch(filterSearchInput(event.target.value));
  };
  const productValueArray = state.cart.map((item) => {
    return item.VALUE;
  });
  const initialProducts = 0;
  const sumOfProductValues = productValueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialProducts
  );

  return (
    <div className={classes["navigation-container"]}>
      <div className={classes["logo-name"]}>
        <NavLink to={"/"}>
          <img
            className={classes["logo-image"]}
            src="../../images/company-logo.png"
            alt=""
          />
        </NavLink>
        <NavLink to={"/products"}>
          <h2 className={classes["company-name"]}>SHOPPE</h2>
        </NavLink>
      </div>

      {/*  */}
      <NavLink to={"/products"}>
        <div className={classes["search-bar-container"]}>
          <input
            onChange={onChangeFilterHandler}
            className={classes["search-bar"]}
            type="search"
            placeholder="Search"
          />
        </div>
      </NavLink>
      {/*  */}

      <div className={showMediaIcons}>
        <div className={classes.wishlistLogo}>
          <FaHeart
            className={classes.heart}
            onClick={() => {
              navigate("/wishlist");
            }}
          />
          <p className={classes.wishlistValue}>
            {wishlistState.wishlist.length}
          </p>
        </div>
        <div className={classes.cartLogo}>
          <FaShoppingCart
            className={classes.cart}
            onClick={() => {
              navigate("/cart");
            }}
          />
          <p className={classes.cartValue}>{sumOfProductValues}</p>
        </div>
        <FaUserAlt className={classes.user} onClick={userProfileHandler} />
      </div>
      <FaBars className={classes.bars} onClick={navToggle} />
    </div>
  );
};

export default NavigationBar;
