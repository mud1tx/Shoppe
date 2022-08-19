export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, payload] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: [...state.cart].filter((product) => {
          if (product.ID !== payload) {
            return product;
          }
        }),
      };
    case "REMOVE_ALL":
      return { ...state, cart: [] };
    case "INCREMENT_PRODUCT_VALUE":
      return {
        ...state,
        cart: [...state.cart].filter((product) => {
          if (product.ID === payload) {
            product.VALUE = product.VALUE + 1;
          }
          return product;
        }),
      };
    case "DECREMENT_PRODUCT_VALUE":
      return {
        ...state,
        cart: [...state.cart].filter((product) => {
          if (product.ID === payload && product.VALUE > 1) {
            product.VALUE = product.VALUE - 1;
            return product;
          } else if (product.ID === payload && product.VALUE === 1) {
            return;
          } else {
            return product;
          }
        }),
      };
    case "STATE_CHANGE":
      return payload;
  }
};
