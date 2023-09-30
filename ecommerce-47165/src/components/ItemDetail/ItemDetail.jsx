import { useContext } from "react";
import { AddItemButton } from "../AddItemButton/AddItemButton";
import { Description } from "../Description/Description";
import ItemCount from "../ItemCount/ItemCount";
import { ItemQuantitySelector } from "../ItemQuantitySelector/ItemQuantitySelector";
import style from "./ItemDetail.module.css";
import { CartContext } from "../../context";

const ItemDetail = ({ product }) => {
  const { cart } = useContext(CartContext);
  const { name, price, img, description, stock } = product;
  const isItemInCart = cart.find((item) => item.name === name);

  return (
    <div>
      <div className={style.detailContainer}>
        <h3 className={style.title}>{name}</h3>
        <img src={img} style={{ width: 100 }} />
        <h3>$ {price}</h3>
        <Description description={description} />
        <ItemCount product={product} />
        {stock && (
          <>
            <AddItemButton product={product} />
            {isItemInCart && <ItemQuantitySelector product={isItemInCart} />}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
