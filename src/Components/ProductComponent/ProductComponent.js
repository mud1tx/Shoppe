import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import classes from "./ProductComponent.module.css";
import { FilterContext } from "../../contexts/FilterContext";
import ProductCard from "./ProductCard";

const ProductComponent = (props) => {
  const { state } = useContext(FilterContext);
  const { category, price, rating, sortBy } = state;

  // input filter
  const inputFilterValue = useSelector((state) => state.filterSearchInput);

  let products = useSelector((state) => state.allProducts.products);

  if (inputFilterValue !== "") {
    products = products.filter((product) => {
      if (product.title.toLowerCase().includes(inputFilterValue)) {
        return product;
      }
    });
  }

  if (category.length > 0) {
    products = products.filter((product) => {
      if (category.includes(product.category)) {
        return product;
      }
    });
  }
  if (price > 0) {
    products = products.filter((product) => {
      if (price < product.price) {
        return product;
      }
    });
  }
  if (rating > 0) {
    products = products.filter((product) => {
      if (rating <= product.rating.rate) {
        return product;
      }
    });
  }

  if (sortBy === "High_To_Low") {
    const hightoLow = (vals) => {
      return vals.sort((a, b) => {
        return b.price - a.price;
      });
    };
    hightoLow(products);
  } else if (sortBy === "Low_To_High") {
    const lowToHigh = (vals) => {
      return vals.sort((a, b) => {
        return a.price - b.price;
      });
    };
    lowToHigh(products);
  }
  useEffect(() => {
    props.ProductCounting(products);
  }, [products]);

  return (
    <div className={classes.productWrapper}>
      {products.length > 0 ? (
        <div className={classes.fullContainer}>
          {products.map((product) => (
            <ProductCard item={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className={classes.nothing}>
          <p>!Oops we have nothing</p>
        </div>
      )}
    </div>
  );
};

export default ProductComponent;
