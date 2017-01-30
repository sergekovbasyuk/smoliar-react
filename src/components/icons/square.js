import React from 'react';
import s from './style.css';

const Square = () => (
  <svg className={s.square} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 19">
    <path d="M1 12H0v7h7v-1H1v-6zM0 0v7h1V1h6V0H0zm18 18h-6.2v1H19v-7h-1v6zM12 0v1h6v6h1V0h-7z" />
  </svg>
);

export default Square;
