import style from "./Item.module.css";
import { useNavigate } from "react-router-dom";

const Item = ({ id, name, img, price }) => {
  const navigate = useNavigate();

  return (
    <div className={style.titleContainer}>
      <h3 className={style.title}>{name}</h3>
      <img src={img} style={{ width: 100 }} />
      <h3 style={{ color: "white" }}>$ {price}</h3>
      <button
        className={style.btnStyle}
        onClick={() => navigate(`/detail/${id}`)}
      >
        Detalle
      </button>
    </div>
  );
};

export default Item;
