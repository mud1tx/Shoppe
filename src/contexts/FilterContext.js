import { createContext, useReducer, useContext } from "react";
import { filterReducer } from "../reducers/filterReducer";
import { INITIAL_STATE } from "../reducers/filterReducer";

export const FilterContext = createContext();

export const FilterProvider = (props) => {
  const [state, dispatch] = useReducer(filterReducer, INITIAL_STATE);
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FilterContext.Provider>
  );
};

export const useProducts = () => useContext(FilterContext);
