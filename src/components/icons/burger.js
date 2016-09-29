import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import burger from "../../svg/burger.svg";

const Burger = () => (
  <SVGInline svg={ burger } className={s.burger} classSuffix='' cleanup/>
);

export default Burger;
