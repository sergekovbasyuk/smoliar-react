import React from 'react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import s from './style.css';

const TopSlider = ({ carouselItems, pathname }) => {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: 'TopSlider',
  };

  if (!carouselItems) {
    return null;
  }

  return (
    <Slider {...settings}>
      { carouselItems.map((item, index) => {
        let style;

        if (item.fields.backgroundImage) {
          style = {
            backgroundImage: `url(${item.fields.backgroundImage.fields.file.url})`,
          };
        }

        return (
          <div className={s.item} style={style} key={index}>
            <div className={s.content}>
              <h1 className={s.title}>{item.fields.title}</h1>
              <p className={s.decription}>{item.fields.description}</p>
              <Link to={`${pathname}${item.sys.id}`} className={s.link}>read more</Link>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

TopSlider.propTypes = {
  carouselItems: React.PropTypes.array,
  pathname: React.PropTypes.string,
};

export default TopSlider;
