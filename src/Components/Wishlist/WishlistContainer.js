import React from "react";
import classes from "./WishlistContainer.module.css";
import NavBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import { useWishlistProducts } from "../../contexts/WishlistContext";
import WishlistCard from "./WishlistCard";
import { NavLink } from "react-router-dom";

const WishlistContainer = () => {
  const { wishlistState } = useWishlistProducts();

  const wishlistProducts = wishlistState.wishlist;

  return (
    <div className={classes.wishlistContainer}>
      <NavBar />
      <div className={classes.wishlistWrapper}>
        <div>
          <h2 className={classes.heading}>
            My Wishlist ({wishlistProducts.length})
          </h2>
        </div>
        {wishlistProducts.length > 0 ? (
          <div className={classes["wishlistProduct-container"]}>
            {wishlistProducts.map((Item) => (
              <WishlistCard key={Item.ID} Item={Item} />
            ))}
          </div>
        ) : (
          <div className={classes.noProduct}>
            <p>Oops! you have nothing in your Wishlist</p>
            <div>
              <NavLink style={{ color: "purple" }} to={"/products"}>
                Go To Shop
              </NavLink>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default WishlistContainer;
