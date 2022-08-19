export const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishlist: [...state.wishlist, payload] };

    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist].filter((product) => {
          if (product.ID !== payload) {
            return product;
          }
        }),
      };
    case "STATE_CHANGE":
      return payload;
  }
};
