export const OrdersReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ORDER":
      return { ...state, orders: [...state.orders, payload] };
    case "STATE_CHANGE":
      return payload;
  }
};
