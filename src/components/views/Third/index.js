import React from 'react';
import s from './style.css';

const Third = ({ text, image }) => (
  <section className={s.section}>
    <img src={image} alt="" className={s.image} />
    <div className={s.content}>
      <h1 className={s.text}>{text}</h1>
    </div>
  </section>
);

Third.propTypes = {
  text: React.PropTypes.string.isRequired,
  image: React.PropTypes.string.isRequired,
};

export default Third;
