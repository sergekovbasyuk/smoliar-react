import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import facebook from "../../svg/facebook.svg";

const Facebook = () => (
  <SVGInline svg={ facebook } className={s.facebook} classSuffix='' cleanup/>
);

export default Facebook;
