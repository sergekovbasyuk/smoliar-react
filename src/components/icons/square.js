import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import square from "../../svg/square.svg";

const Square = () => (
  <SVGInline svg={ square } className={s.square} classSuffix='' cleanup/>
);

export default Square;
