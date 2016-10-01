import React from 'react';
import SVGInline from 'react-svg-inline';
import s from './style.css';
import instagram from '../../svg/instagram.svg';

const Instagram = () => (
  <SVGInline svg={instagram} className={s.instagram} classSuffix="" cleanup />
);

export default Instagram;
