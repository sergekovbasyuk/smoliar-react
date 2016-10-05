import React from 'react';
import Slider from 'react-slick';
import s from './style.css';

const TopSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'TopSlider',
  };

  return (
    <Slider {...settings}>
      <div className={s.item}>
        <div className={s.content}>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <p className={s.decription}>You may be a skillful,
          effective employer but if you don’t trust your personnel
          and the opposite, then the chances of improving and
          expanding the business you deal with, are extremely limited.</p>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.content}>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <p className={s.decription}>You may be a skillful,
          effective employer but if you don’t trust your personnel
          and the opposite, then the chances of improving and
          expanding the business you deal with, are extremely limited.</p>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
      <div className={s.item}>
        <div className={s.content}>
          <h1 className={s.title}>Change Your Mind Change Your Luck</h1>
          <p className={s.decription}>You may be a skillful,
          effective employer but if you don’t trust your personnel
          and the opposite, then the chances of improving and
          expanding the business you deal with, are extremely limited.</p>
          <span to="/about" className={s.link}>read more</span>
        </div>
      </div>
    </Slider>
  );
};

export default TopSlider;
