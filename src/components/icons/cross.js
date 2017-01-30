import React from 'react';
import s from './style.css';

const Cross = () => (
  <svg className={s.cross} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
    <path d="M2.8 0l10.6 10.6-2.8 2.8L0 2.8z" />
    <path d="M10.6 0l2.8 2.8L2.8 13.4 0 10.6z" />
  </svg>
);

export default Cross;
