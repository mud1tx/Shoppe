import React from "react";
import classes from "./Category.module.css";
import { useProducts } from "../../contexts/FilterContext";
import { useNavigate } from "react-router-dom";

const Category = (props) => {
  const { state, dispatch } = useProducts();
  const navigate = useNavigate();
  return (
    <div
      className={classes["category-container"]}
      onClick={() => {
        dispatch({
          type: "CATEGORY_FILTER",
          payload: props.thing,
        });
        navigate("/products");
      }}
    >
      <div className={classes["category-image"]}>
        <img src={`./images/${props.thing}-image.jpg`} alt="" />
      </div>
      <div className={classes["category-text"]}>
        <p>{props.thing}</p>
      </div>
    </div>
  );
};

export default Category;
