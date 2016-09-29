import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import produce from "../../svg/produce.svg";

const Produce = () => (
  <SVGInline svg={ produce } className={s.produce} classSuffix='' cleanup/>
);

export default Produce;
