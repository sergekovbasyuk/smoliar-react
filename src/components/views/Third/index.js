import React from 'react';
import s from './style.css';

const Third = ({ text, image }) => {
  return (
    <section className={s.section}>
      <img src={image} alt="" className={s.image} />
      <div className={s.content}>
        <h1 className={s.text}>{text}</h1>
      </div>
    </section>
  );
};

Third.propTypes = {
  text: React.PropTypes.string,
  image: React.PropTypes.string,
};

export default Third;
