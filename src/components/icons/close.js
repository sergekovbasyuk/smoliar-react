import React from 'react';
import s from './style.css';

const Close = () => (
  <svg className={s.close} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
    <path d="M0 .8L.8 0 17 16.2l-.8.8z" />
    <path d="M.8 17l-.8-.8L16.2 0l.8.8z" />
  </svg>
);

export default Close;
