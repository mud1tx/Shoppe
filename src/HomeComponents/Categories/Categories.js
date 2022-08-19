import React from "react";
import classes from "./Categories.module.css";
import Category from "./Category";

const Categories = () => {
  return (
    <div className={classes["categories-container"]}>
      <div className={classes["category-heading"]}>
        <h1>CATEGORIES</h1>
      </div>
      <div className={classes.category}>
        <Category thing="men's clothing" />
        <Category thing="women's clothing" />
        <Category thing="jewelery" />
        <Category thing="electronics" />
      </div>
    </div>
  );
};

export default Categories;
