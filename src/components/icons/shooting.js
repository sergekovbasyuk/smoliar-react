import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import shooting from "../../svg/shooting.svg";

const Shooting = () => (
  <SVGInline svg={ shooting } className={s.shooting} classSuffix='' cleanup/>
);

export default Shooting;
