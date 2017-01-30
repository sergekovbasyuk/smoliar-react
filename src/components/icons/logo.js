import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const Logo = () => (
  <Link to="/" >
    <svg className={s.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.7 22.5">
      <path d="M10.4 5h2L18 17.5h-2.3l-1.3-3h-6l-1.3 3H5L10.3 5zm3.2 7.5l-2.2-5-2.2 5h4.4zm12-7.5h2.2v10.5h6.6v2h-8.8V5zM42 5h9.4v2h-7v3h6.2v2h-6.3v3.4h7.2v2H42V5zm17.6 0h2.2v6l6-6.3h2.7L65.3 10l5.5 7.2H68l-4-5.4-2 2v3.7h-2.2V5zM77 15.7l1.3-1.6c1.2 1 2.4 1.7 4 1.7 1.4 0 2.2-.6 2.2-1.6 0-.8-.5-1.3-2.8-1.8-2.7-.6-4.2-1.4-4.2-3.8 0-2.2 1.8-3.7 4.3-3.7 1.8 0 3.3.6 4.6 1.6L85.2 8c-1-.8-2.3-1.3-3.4-1.3-1.3 0-2 .7-2 1.5 0 1 .5 1.4 3 2 2.6.6 4 1.6 4 3.7 0 2.3-2 3.7-4.5 3.7-2 0-3.8-.6-5.3-2zM94.8 5h9.3v2h-7v3h6.3v2H97v3.4h7.2v2h-9.4V5zm17.6 0h2.2v12.5h-2.2V5zm20.9 10.7l1.3-1.6c1.2 1 2.4 1.7 4 1.7 1.4 0 2.2-.6 2.2-1.6 0-.8-.5-1.3-2.8-1.8-2.7-.6-4.2-1.4-4.2-3.8 0-2.2 1.8-3.7 4.3-3.7 2 0 3.4.6 4.7 1.6L141.5 8c-1-.8-2.3-1.3-3.4-1.3-1.2 0-2 .7-2 1.5 0 1 .6 1.4 3 2 2.7.6 4 1.6 4 3.7 0 2.3-1.8 3.7-4.4 3.7-2 0-3.8-.6-5.3-2zM151 5h2.5l3.8 6 3.8-6h2.5v12.5h-2.2v-9l-4 6-4-6v9H151V5zm20.5 6.3c0-3.5 2.7-6.5 6.6-6.5s6.7 3 6.7 6.5-2.7 6.5-6.6 6.5c-3.8 0-6.5-3-6.5-6.5zm11 0c0-2.4-2-4.5-4.4-4.5-2.4 0-4 2-4 4.5 0 2.4 1.7 4.5 4.2 4.5s4.2-2 4.2-4.5zM192.8 5h2.2v10.5h6.6v2h-8.8V5zm16.7 0h2.2v12.5h-2.2V5zM225 5h2l5.5 12.6h-2.3l-1.3-3h-6l-1.4 3h-2.3L225 5zm3 7.5l-2-5-2.3 5h4.4zM240 5h5.7c3 0 4.7 1.5 4.7 4 0 2-1.2 3.2-3 3.7l3.4 4.8h-2.6l-3-4.4h-2.8v4.5h-2.2V5zm5.5 6.2c1.6 0 2.6-.8 2.6-2 0-1.5-1-2.2-2.5-2.2h-3.2v4.2h3.2z" />
    </svg>
  </Link>
);

export default Logo;
