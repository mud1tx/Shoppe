import React from "react";
import classes from "./Footer.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.footer}>
      <div className={classes["personal-details"]}>
        <div className={classes["name-logo"]}>
          <NavLink to={"/"}>
            <img src="./images/company-logo.png" alt="" />
          </NavLink>
          <NavLink className={classes["company_logo"]} to={"/products"}>
            <h3>SHOPPE</h3>
          </NavLink>
        </div>
        <div>
          <p>Choose from our wide variety of fragrances</p>
        </div>
        <div className={classes.links}>
          <a href="https://github.com" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/?hl=en" target="_blank">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className={classes["website-links"]}>
        <div className={classes["quick-links"]}>
          <h3>Quick Links</h3>
        </div>
        <div>
          <div
            className={classes.quickLinkProducts}
            onClick={() => {
              navigate("/products");
            }}
          >
            Products
          </div>
          <div
            className={classes.quickLinkWishlist}
            onClick={() => {
              navigate("/wishlist");
            }}
          >
            Wishlist
          </div>
          <div
            className={classes.quickLinkCart}
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </div>
        </div>
      </div>
      <div>
        <div>
          <h3>Contact Us</h3>
        </div>
        <div>
          <div className={classes.addressDetail}>
            <FaMapMarkerAlt />
            <p>212 Oakbrook Center, Indiana</p>
          </div>
          <div className={classes.addressDetail}>
            <FaPhoneAlt />
            <p>+91 21200 21200</p>
          </div>
          <div className={classes.addressDetail}>
            <FaEnvelope />
            <p>support@shoppe.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
