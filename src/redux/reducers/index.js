import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { selectedProductReducer } from "./productReducer";
import {
  filterSearchInputReducer,
} from "./filterReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  filterSearchInput: filterSearchInputReducer,
});

export default reducers;
