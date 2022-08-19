export const INITIAL_STATE = {
  category: [],
  price: 0,
  rating: null,
  sortBy: null,
};

export const filterReducer = (state, { type, payload }) => {
  switch (type) {
    case "CATEGORY_FILTER":
      if (state.category.includes(payload)) {
        return {
          ...state,
          category: [...state.category].filter((category) => {
            if (category !== payload) {
              return category;
            }
          }),
        };
      } else {
        return { ...state, category: [...state.category, payload] };
      }
    case "PRICE_FILTER":
      return { ...state, price: payload };
    case "RATING_FILTER":
      return { ...state, rating: payload };
    case "SORT_FILTER":
      return { ...state, sortBy: payload };
    case "CLEAR_FILTER":
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
