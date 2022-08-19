import React from "react";
import classes from "../Logout/Profile.module.css";
import { NavLink } from "react-router-dom";
import NavBar from "../../HomeComponents/NavigationBar/NavigationBar";
import Footer from "../../HomeComponents/Footer/Footer";
import { useOrders } from "../../contexts/OrdersContext";
import OrderCard from "./OrderCard";

const OrderContainer = () => {
  const { ordersState } = useOrders();
  const totalOrders = ordersState.orders;
  return (
    <div className={classes.userDataContainer}>
      <NavBar />
      <div className={classes.body}>
        <div>
          <h2 className={classes.heading}>My Account</h2>
        </div>
        <div className={classes.linkData}>
          <div className={classes.linkContainer}>
            <NavLink to="/logout" className={classes.profileLink}>
              Profile
            </NavLink>
            <NavLink to="/logout/orders" className={classes.orderLink}>
              Orders
            </NavLink>
          </div>
          {ordersState.orders.length > 0 ? (
            <div className={classes.OrderWrapper}>
              {totalOrders.map((data) => (
                <OrderCard
                  data={data}
                  key={Math.random() * 1000}
                  id={new Date().getTime().toString()}
                />
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
      </div>
      <Footer />
    </div>
  );
};

export default OrderContainer;
