import { createContext, useReducer, useContext, useEffect } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";
import { LOCALSTORAGESTATE } from "../LocalStorageState";
import { useAuth } from "./AuthContext";

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {
  const { currentUser } = useAuth();

  let p = (currentUser && currentUser.email) ?? "";
  const [wishlistState, wishlistdispatch] = useReducer(
    wishlistReducer,
    LOCALSTORAGESTATE
  );
  useEffect(() => {
    if (currentUser) {
      LOCALSTORAGESTATE.wishlist = wishlistState.wishlist;
      localStorage.setItem(`${p}`, JSON.stringify(LOCALSTORAGESTATE));
    }
  }, [wishlistState]);

  return (
    <WishlistContext.Provider value={{ wishlistState, wishlistdispatch }}>
      {props.children}
    </WishlistContext.Provider>
  );
};
export const useWishlistProducts = () => useContext(WishlistContext);
