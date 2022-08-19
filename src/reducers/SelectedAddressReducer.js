export const SelectedAddressReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_ADDRESS":
      return { ...state, selectedAddress: payload };
    case "REMOVE_ADDRESS":
      return { ...state, selectedAddress: payload };
    case "STATE_CHANGE":
      return payload;
  }
};
