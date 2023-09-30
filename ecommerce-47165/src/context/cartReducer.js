export const cartReducer = (state, action) => {
  switch (action.type) {
    case "[CART] - Add Product":
      return {
        ...state,
        cart: action.payload,
      };

    case "[CART] - Change product quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product.id !== action.payload.id) return product;
          return action.payload;
        }),
      };
    case "[CART] - Remove product in cart":
      return {
        ...state,
        cart: state.cart.filter(
          (product) => !(product.id === action.payload.id)
        ),
      };
    case "[CART] - Update quantity of items":
      return {
        ...state,
        numberOfItems: action.payload.numberOfItems,
        subTotal: action.payload.subTotal * action.payload.numberOfItems,
      };
    default:
      return state;
  }
};
