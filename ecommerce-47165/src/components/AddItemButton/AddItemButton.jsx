import React, { useContext } from "react";
import { CartContext } from "../../context";

export const AddItemButton = ({ product }) => {
  const { addProductToCart } = useContext(CartContext);

  return (
    <button
      onClick={() => {
        addProductToCart({ ...product, quantity: 1 });
      }}
    >
      Comprar
    </button>
  );
};
