import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import close from "../../svg/close.svg";

const Close = () => (
  <SVGInline svg={ close } className={s.close} classSuffix='' cleanup/>
);

export default Close;
