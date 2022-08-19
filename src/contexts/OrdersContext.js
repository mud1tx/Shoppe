import {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { OrdersReducer } from "../reducers/OrdersReducer";
import { LOCALSTORAGESTATE } from "../LocalStorageState";
import { useAuth } from "./AuthContext";

export const OrdersContext = createContext();

export const OrdersProvider = (props) => {
  const { currentUser } = useAuth();

  let p = (currentUser && currentUser.email) ?? "";

  const [ordersState, ordersdispatch] = useReducer(
    OrdersReducer,
    LOCALSTORAGESTATE
  );
  useEffect(() => {
    if (currentUser) {
      LOCALSTORAGESTATE.orders = ordersState.orders;
      localStorage.setItem(`${p}`, JSON.stringify(LOCALSTORAGESTATE));
    }
  }, [ordersState]);
  return (
    <OrdersContext.Provider value={{ ordersState, ordersdispatch }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export const useOrders = () => useContext(OrdersContext);
