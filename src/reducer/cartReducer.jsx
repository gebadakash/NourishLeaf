const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      console.log("Product Added (via Reducer):", action.payload); // Debug log
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    default:
      return state;
  }
};

export default cartReducer;