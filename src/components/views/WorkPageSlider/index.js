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
        {this.props.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className={s.slider} />
          </div>
        ))}
      </Slider>
    );
  }
}

WorkPageSlider.propTypes = {
  images: React.PropTypes.array,
};

export default WorkPageSlider;
