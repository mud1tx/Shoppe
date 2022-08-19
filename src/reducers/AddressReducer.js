export const AddressReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ADDRESS":
      return { ...state, address: [...state.address, payload] };
    case "REMOVE_ADDRESS":
      return {
        ...state,
        address: [...state.address].filter((val) => {
          return val.id !== payload;
        }),
      };
    case "STATE_CHANGE":
      return payload;
  }
};
