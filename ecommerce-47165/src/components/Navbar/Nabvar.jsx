import React from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import style from "./navbar.module.css";
import { Navlink } from "./Navlink";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={style.navbarContainer}>
      <div>
        <h1 onClick={() => navigate("/")} className={style.nameEcommerce}>
          Naribarber
        </h1>
      </div>
      <div>
        <Navlink title="Electronico" url="/category/electronicos" />
        <Navlink title="Herramientas" url="/category/herramientas" />
        <Navlink title="Capilares" url="/category/capilares" />
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
