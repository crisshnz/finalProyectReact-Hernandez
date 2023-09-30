import { useEffect, useState } from "react";
import { getProductById } from "./../products";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const getInitialData = async (id) => {
    await getProductById(id)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInitialData(productId);
  }, [productId]);
  if (!product) return <div className="loader"></div>;
  return (
    <div>
      <h1>Detalle de producto</h1>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
