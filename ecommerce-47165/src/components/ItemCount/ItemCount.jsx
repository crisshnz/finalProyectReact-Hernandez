import { useContext } from "react";
import { CartContext } from "../../context";

const ItemCount = ({ product }) => {
  const { cart } = useContext(CartContext);
  const getQuantity = () => {
    const exist = cart.find((item) => product.name === item.name);
    if (exist) {
      return exist.quantity;
    }
    return 0;
  };
  return <div>Actualmente tiene: {getQuantity()} productos en el carrito</div>;
};

export default ItemCount;
