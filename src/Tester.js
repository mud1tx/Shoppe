import React, { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";
import { useCartProducts } from "./contexts/CartContext";
import { useAddress } from "./contexts/AddressContext";
import { useWishlistProducts } from "./contexts/WishlistContext";
import { useSelectAddress } from "./contexts/SelectedAddressContext";
import { useOrders } from "./contexts/OrdersContext";

const Tester = () => {
  const { ordersdispatch } = useOrders();
  const { dispatch } = useCartProducts();
  const { wishlistdispatch } = useWishlistProducts();
  const { addressdispatch } = useAddress();
  const { selectAddressdispatch } = useSelectAddress();
  const { currentUser } = useAuth();
  let p = (currentUser && currentUser.email) ?? "";
  useEffect(() => {
    function stateHandler() {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === p) {
          dispatch({
            type: "STATE_CHANGE",
            payload: JSON.parse(localStorage.getItem(localStorage.key(i))),
          });
          wishlistdispatch({
            type: "STATE_CHANGE",
            payload: JSON.parse(localStorage.getItem(localStorage.key(i))),
          });
          addressdispatch({
            type: "STATE_CHANGE",
            payload: JSON.parse(localStorage.getItem(localStorage.key(i))),
          });
          selectAddressdispatch({
            type: "STATE_CHANGE",
            payload: JSON.parse(localStorage.getItem(localStorage.key(i))),
          });
          ordersdispatch({
            type: "STATE_CHANGE",
            payload: JSON.parse(localStorage.getItem(localStorage.key(i))),
          });
          return;
        }
      }
      dispatch({
        type: "STATE_CHANGE",
        payload: {
          cart: [],
          wishlist: [],
          address: [
            {
              id: "16583401784475",
              name: "Hemant",
              street: "102-P Road",
              city: "Kolkata",
              state: "UP",
              country: "India",
              mobile: "285923589235",
              zipcode: "3458923540",
            },
          ],
          selectedAddress: null,
          orders: [],
        },
      });
      wishlistdispatch({
        type: "STATE_CHANGE",
        payload: {
          cart: [],
          wishlist: [],
          address: [
            {
              id: "16583401784475",
              name: "Hemant",
              street: "102-P Road",
              city: "Kolkata",
              state: "UP",
              country: "India",
              mobile: "285923589235",
              zipcode: "3458923540",
            },
          ],
          selectedAddress: null,
          orders: [],
        },
      });
      addressdispatch({
        type: "STATE_CHANGE",
        payload: {
          cart: [],
          wishlist: [],
          address: [
            {
              id: "16583401784475",
              name: "Hemant",
              street: "102-P Road",
              city: "Kolkata",
              state: "UP",
              country: "India",
              mobile: "285923589235",
              zipcode: "3458923540",
            },
          ],
          selectedAddress: null,
          orders: [],
        },
      });
      selectAddressdispatch({
        type: "STATE_CHANGE",
        payload: {
          cart: [],
          wishlist: [],
          address: [
            {
              id: "16583401784475",
              name: "Hemant",
              street: "102-P Road",
              city: "Kolkata",
              state: "UP",
              country: "India",
              mobile: "285923589235",
              zipcode: "3458923540",
            },
          ],
          selectedAddress: null,
          orders: [],
        },
      });
      ordersdispatch({
        type: "STATE_CHANGE",
        payload: {
          cart: [],
          wishlist: [],
          address: [
            {
              id: "16583401784475",
              name: "Hemant",
              street: "102-P Road",
              city: "Kolkata",
              state: "UP",
              country: "India",
              mobile: "285923589235",
              zipcode: "3458923540",
            },
          ],
          selectedAddress: null,
          orders: [],
        },
      });
      return;
    }
    stateHandler();
  }, [p]);
};

export default Tester;
