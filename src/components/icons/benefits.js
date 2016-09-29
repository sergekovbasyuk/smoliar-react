import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import benefits from "../../svg/benefits.svg";

const Benefits = () => (
  <SVGInline svg={ benefits } className={s.benefits} classSuffix='' cleanup/>
);

export default Benefits;
