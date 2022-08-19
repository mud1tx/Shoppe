import { FilterTypes } from "../constants/filter-types";

export const filterSearchInput = (input) => {
  return {
    type: FilterTypes.FILTER_SEARCH_INPUT,
    payload: { input },
  };
};
