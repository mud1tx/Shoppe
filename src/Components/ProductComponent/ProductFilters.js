import React from "react";
import classes from "./ProductFilters.module.css";
import { INITIAL_STATE } from "../../reducers/filterReducer";
import { useProducts } from "../../contexts/FilterContext";
import { FaTimes } from "react-icons/fa";

const ProductFilters = (props) => {
  const { state, dispatch } = useProducts();

  return (
    <div className={classes.filterContainer}>
      <div className={classes["heading-clear"]}>
        <div>
          <h2 className={classes.filterHeading}>Filters</h2>
        </div>
        <div className={classes["clear_cancel_btn"]}>
          <a
            className={classes.clearFilter}
            onClick={() => {
              dispatch({ type: "CLEAR_FILTER", payload: INITIAL_STATE });
            }}
          >
            Clear
          </a>
          <FaTimes
            className={classes.cancelBtn}
            onClick={() => {
              props.cancelBtnHandler();
            }}
          />
        </div>
      </div>

      {/*category  */}
      <div>
        <div>
          <div className={classes.categoryHeadingContainer}>
            <h3 className={classes.categoryHeading}>Category</h3>
          </div>
          <div className={classes.categoryContainer}>
            <ul className={classes.categoryListContainer}>
              <li>
                <label>
                  <input
                    onChange={(event) => {
                      dispatch({
                        type: "CATEGORY_FILTER",
                        payload: event.target.value,
                      });
                    }}
                    checked={state.category.includes("electronics")}
                    type="checkbox"
                    value="electronics"
                  />
                  electronics
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => {
                      dispatch({
                        type: "CATEGORY_FILTER",
                        payload: event.target.value,
                      });
                    }}
                    checked={state.category.includes("jewelery")}
                    type="checkbox"
                    value="jewelery"
                  />
                  jewelery
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => {
                      dispatch({
                        type: "CATEGORY_FILTER",
                        payload: event.target.value,
                      });
                    }}
                    checked={state.category.includes("men's clothing")}
                    type="checkbox"
                    value="men's clothing"
                  />
                  men's clothing
                </label>
              </li>
              <li>
                <label>
                  <input
                    onChange={(event) => {
                      dispatch({
                        type: "CATEGORY_FILTER",
                        payload: event.target.value,
                      });
                    }}
                    checked={state.category.includes("women's clothing")}
                    type="checkbox"
                    value="women's clothing"
                  />
                  women's clothing
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* price */}
        <div>
          <div className={classes.priceHeadingContainer}>
            <h3>Price</h3>
          </div>
          <div className={classes.priceContainer}>
            <div className={classes.inputBar}>
              <input
                type="range"
                min="0"
                max="1000"
                list="tickmarks"
                value={state.price}
                onChange={(event) => {
                  dispatch({
                    type: "PRICE_FILTER",
                    payload: Number(event.target.value),
                  });
                }}
              />
              <datalist id="tickmarks">
                <option value="0"></option>
                <option value="200"></option>
                <option value="400"></option>
                <option value="600"></option>
                <option value="800"></option>
                <option value="1000"></option>
              </datalist>
            </div>
            <div>{state.price}</div>
          </div>
        </div>
        {/* rating */}
        <div>
          <div className={classes.ratingHeadingContainer}>
            <h3>Rating</h3>
          </div>
          <div className={classes.ratingContainer}>
            <ul className={classes.ratingListContainer}>
              <li>
                <label>
                  <input
                    type="radio"
                    value="1"
                    name="rating"
                    checked={state.rating === 1}
                    onChange={(event) => {
                      dispatch({
                        type: "RATING_FILTER",
                        payload: Number(event.target.value),
                      });
                    }}
                  />
                  1⭐ & above
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="2"
                    name="rating"
                    checked={state.rating === 2}
                    onChange={(event) => {
                      dispatch({
                        type: "RATING_FILTER",
                        payload: Number(event.target.value),
                      });
                    }}
                  />
                  2⭐ & above
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="3"
                    name="rating"
                    checked={state.rating === 3}
                    onChange={(event) => {
                      dispatch({
                        type: "RATING_FILTER",
                        payload: Number(event.target.value),
                      });
                    }}
                  />
                  3⭐ & above
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="4"
                    name="rating"
                    checked={state.rating === 4}
                    onChange={(event) => {
                      dispatch({
                        type: "RATING_FILTER",
                        payload: Number(event.target.value),
                      });
                    }}
                  />
                  4⭐ & above
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="5"
                    name="rating"
                    checked={state.rating === 5}
                    onChange={(event) => {
                      dispatch({
                        type: "RATING_FILTER",
                        payload: Number(event.target.value),
                      });
                    }}
                  />
                  5⭐ & above
                </label>
              </li>
            </ul>
          </div>
        </div>
        {/* sort */}
        <div>
          <div className={classes.sortHeadingContainer}>
            <h3>Sort By</h3>
          </div>
          <div className={classes.sortContainer}>
            <ul className={classes.sortListContainer}>
              <li>
                <label>
                  <input
                    type="radio"
                    value="Low_To_High"
                    name="category"
                    checked={state.sortBy === "Low_To_High"}
                    onChange={(event) => {
                      dispatch({
                        type: "SORT_FILTER",
                        payload: event.target.value,
                      });
                    }}
                  />
                  Low To High
                </label>
              </li>
              <li>
                <label>
                  <input
                    type="radio"
                    value="High_To_Low"
                    name="category"
                    checked={state.sortBy === "High_To_Low"}
                    onChange={(event) => {
                      dispatch({
                        type: "SORT_FILTER",
                        payload: event.target.value,
                      });
                    }}
                  />
                  High To Low
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
