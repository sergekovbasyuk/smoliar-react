import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import linkedin from '../../svg/linkedin.svg';

const LinkedIn = () => (
  <SVGInline svg={linkedin} className={s.linkedin} classSuffix="" cleanup />
);

export default LinkedIn;
