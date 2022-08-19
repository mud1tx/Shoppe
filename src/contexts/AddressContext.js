import {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { AddressReducer } from "../reducers/AddressReducer";
import { LOCALSTORAGESTATE } from "../LocalStorageState";
import { useAuth } from "./AuthContext";

export const AddressContext = createContext();

export const AddressProvider = (props) => {
  const { currentUser } = useAuth();

  let p = (currentUser && currentUser.email) ?? "";

  const [addressState, addressdispatch] = useReducer(
    AddressReducer,
    LOCALSTORAGESTATE
  );
  useEffect(() => {
    if (currentUser) {
      LOCALSTORAGESTATE.address = addressState.address;
      localStorage.setItem(`${p}`, JSON.stringify(LOCALSTORAGESTATE));
    }
  }, [addressState]);
  return (
    <AddressContext.Provider value={{ addressState, addressdispatch }}>
      {props.children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => useContext(AddressContext);
