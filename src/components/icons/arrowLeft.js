import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import arrowLeft from "../../svg/arrow-left.svg";

const ArrowLeft = () => (
  <SVGInline svg={ arrowLeft } className={s.arrowLeft} classSuffix='' cleanup/>
);

export default ArrowLeft;
