import React, { useEffect, useState } from "react";
import style from "./ItemListContainer.module.css";
import { getProducts, getProductsByCategory } from "../products";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div className="loaderContainer">
        <span className="loader"></span>;
      </div>
    );
  }

  return (
    <div className={style.titleMainContainer}>
      <h1 className={style.title}>{greeting}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
