import React from 'react';
import Slider from 'react-slick';
import s from './style.css';

class WorkPageSlider extends React.Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    const images = this.props.images;

    if (!images) {
      return null;
    }

    return (
      <Slider {...settings}>
        <div><img src={images[0]} alt="" className={s.slider} /></div>
        <div><img src={images[1]} alt="" className={s.slider} /></div>
        <div><img src={images[2]} alt="" className={s.slider} /></div>
      </Slider>
    );
  }
}

WorkPageSlider.propTypes = {
  images: React.PropTypes.array,
};

export default WorkPageSlider;
