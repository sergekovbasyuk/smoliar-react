import React from 'react';
import Slider from 'react-slick';
import s from './style.css';

const WorkPageSlider = ({ images }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!images) {
    return null;
  }

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt="" className={s.slider} />
        </div>
      ))}
    </Slider>
  );
};

WorkPageSlider.propTypes = {
  images: React.PropTypes.array,
};

export default WorkPageSlider;
