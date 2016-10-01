import React from 'react';
import Slider from 'react-slick';
import s from './style.css';

const WorkPageSlider = () => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
      <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
      <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
    </Slider>
  );
};

export default WorkPageSlider;
