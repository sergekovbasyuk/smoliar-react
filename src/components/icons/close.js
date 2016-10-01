import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import close from '../../svg/close.svg';

const Close = () => (
  <SVGInline svg={close} className={s.close} classSuffix="" cleanup />
);

export default Close;
