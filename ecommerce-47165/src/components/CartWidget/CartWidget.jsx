import React, { useContext } from "react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context";
import style from "./CartWidget.module.css";

export const CartWidget = () => {
  const { numberOfItems, subTotal } = useContext(CartContext);
  return (
    <>
      <button className={style.shoppingCart}>
        <ShoppingCart fontSize="large" />
        {numberOfItems}
        <div>{subTotal > 0 && <span>${subTotal}</span>}</div>
      </button>
    </>
  );
};
