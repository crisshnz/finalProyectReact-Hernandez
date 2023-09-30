import React from "react";
import style from "./navbar.module.css";

export const Navlink = ({ title, url }) => {
  return (
    <a className={style.navbarButton} href={url}>
      {title}
    </a>
  );
};
