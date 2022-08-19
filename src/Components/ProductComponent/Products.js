import React, { useState } from "react";
import Footer from "../../HomeComponents/Footer/Footer";
import NavigationBar from "../../HomeComponents/NavigationBar/NavigationBar";
import ProductFilter from "../ProductComponent/ProductFilters";
import classes from "./Products.module.css";
import ProductsListing from "./ProductsListing";
import { FaSlidersH, FaTimes } from "react-icons/fa";

const Products = () => {
  const [productLength, setproductLength] = useState(20);
  const [showFilter, setShowFilter] = useState(classes.productFilter);
  const totalProductHandler = (productsLength) => {
    setproductLength(productsLength);
    return;
  };

  const filterToggle = () => {
    showFilter === classes.productFilter
      ? setShowFilter(
          `${classes.productFilter} ${classes["productFilter-active"]}`
        )
      : setShowFilter(classes.productFilter);
  };

  const cancelBtnHandler = () => {
    setShowFilter(classes.productFilter);
  };

  return (
    <div>
      <NavigationBar />
      <div className={classes["filter-product-container"]}>
        <div className={showFilter}>
          <ProductFilter
            className={classes.productFilterr}
            cancelBtnHandler={cancelBtnHandler}
          />
        </div>
        <div className={classes.productsListing}>
          <div className={classes["product_Slider_Container"]}>
            <div className={classes.numbers}>
              <h2>Showing {productLength} of 20 Products</h2>
            </div>
            <div className={classes.slidesIconContainer}>
              <FaSlidersH
                className={classes.sliderIcon}
                onClick={filterToggle}
              />
            </div>
          </div>
          <ProductsListing totalProducts={totalProductHandler} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
