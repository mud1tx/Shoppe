import {
  createContext,
  useReducer,
  useContext,
  useEffect,
} from "react";
import { SelectedAddressReducer } from "../reducers/SelectedAddressReducer";
import { LOCALSTORAGESTATE } from "../LocalStorageState";
import { useAuth } from "./AuthContext";

export const SelectedAddressContext = createContext();

export const SelectedAddressProvider = (props) => {
  const { currentUser } = useAuth();

  let p = (currentUser && currentUser.email) ?? "";

  const [selectAddressState, selectAddressdispatch] = useReducer(
    SelectedAddressReducer,
    LOCALSTORAGESTATE
  );
  useEffect(() => {
    if (currentUser) {
      LOCALSTORAGESTATE.selectedAddress = selectAddressState.selectedAddress;
      localStorage.setItem(`${p}`, JSON.stringify(LOCALSTORAGESTATE));
    }
  }, [selectAddressState]);
  return (
    <SelectedAddressContext.Provider
      value={{ selectAddressState, selectAddressdispatch }}
    >
      {props.children}
    </SelectedAddressContext.Provider>
  );
};

export const useSelectAddress = () => useContext(SelectedAddressContext);
