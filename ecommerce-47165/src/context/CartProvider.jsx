import { useEffect, useReducer } from "react";
import { CartContext, cartReducer } from "./";

const INITIAL_STATE = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  totalPrice: 0,
  shippingAddress: undefined,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const addProductToCart = (product) => {
    const productInCart = state.cart.some((item) => item.id === product.id);
    if (!productInCart)
      return dispatch({
        type: "[CART] - Add Product",
        payload: [...state.cart, product],
      });
  };

  const updateCartQuantity = (product) => {
    dispatch({ type: "[CART] - Change product quantity", payload: product });
  };

  const removeCartProduct = (product) => {
    dispatch({ type: "[CART] - Remove product in cart", payload: product });
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      cart.map((item) => addProductToCart(item));
    }
  }, []);

  useEffect(() => {
    const numberOfItems = state.cart.reduce(
      (prev, current) => current.quantity + prev,
      0
    );
    const subTotal = state.cart.reduce(
      (prev, current) => current.price + prev,
      0
    );
    dispatch({
      type: "[CART] - Update quantity of items",
      payload: { numberOfItems, subTotal },
    });
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addProductToCart,
        updateCartQuantity,
        removeCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
