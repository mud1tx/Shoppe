import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "../reducers/cartReducer";
import { LOCALSTORAGESTATE } from "../LocalStorageState";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const { currentUser } = useAuth();

  let p = (currentUser && currentUser.email) ?? "";

  const [state, dispatch] = useReducer(cartReducer, LOCALSTORAGESTATE);
  useEffect(() => {
    if (currentUser) {
      LOCALSTORAGESTATE.cart = state.cart;
      localStorage.setItem(`${p}`, JSON.stringify(LOCALSTORAGESTATE));
    }
  }, [state]);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCartProducts = () => useContext(CartContext);
