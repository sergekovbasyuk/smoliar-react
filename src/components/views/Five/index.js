import React from 'react';
import s from './style.css';
import WorkPageSlider from '../WorkPageSlider';

const Five = ({ images, title, text }) => (
  <section className={s.section}>
    <div className={s.sliderContainer}>
      <WorkPageSlider images={images} />
    </div>
    <div className={s.content}>
      <div className={s.description}>
        <h1 className={s.minorTitle}>{title}</h1>
        <p className={s.text}>{text}</p>
      </div>
    </div>
  </section>
);

Five.propTypes = {
  images: React.PropTypes.array,
  title: React.PropTypes.string,
  text: React.PropTypes.string,
};

export default Five;
