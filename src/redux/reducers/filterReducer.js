import { FilterTypes } from "../constants/filter-types";

export const filterSearchInputReducer = (state = "", { type, payload }) => {
  switch (type) {
    case FilterTypes.FILTER_SEARCH_INPUT:
      return (state = payload.input);
    default:
      return state;
  }
};
