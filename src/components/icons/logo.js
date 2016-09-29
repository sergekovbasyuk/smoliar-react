import React from 'react';
import s from "./style.css";
import SVGInline from "react-svg-inline";
import logo from "../../svg/logo.svg";

const Logo = () => (
  <SVGInline svg={ logo } className={s.logo} classSuffix='' cleanup/>
);

export default Logo;
