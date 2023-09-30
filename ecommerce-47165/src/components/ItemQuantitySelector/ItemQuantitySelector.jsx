import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context";

export const ItemQuantitySelector = ({ product }) => {
  const [productState, setQuantity] = useState(product);
  const { updateCartQuantity } = useContext(CartContext);

  useEffect(() => {
    updateCartQuantity(productState);
  }, [productState]);

  return (
    <div>
      <button
        onClick={() => {
          if (productState.quantity === product.stock) return;
          setQuantity((prev) => ({
            ...prev,
            quantity: prev.quantity + 1,
          }));
        }}
      >
        +
      </button>
      {productState.quantity}
    </div>
  );
};
