import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import classes from "./Dashboard.module.css";
import FrontPageImage from "../FrontPageImage/FrontPageImage";
import WebsiteFeatures from "../WebsiteFeatures/WebsiteFeatures";
import Categories from "../Categories/Categories";
import Footer from "../Footer/Footer";

const Dashboard = () => {
  return (
    <div className={classes["navigation-image-wrapper"]}>
      <NavigationBar />
      <FrontPageImage />
      <WebsiteFeatures />
      <Categories />
      <Footer />
    </div>
  );
};

export default Dashboard;
