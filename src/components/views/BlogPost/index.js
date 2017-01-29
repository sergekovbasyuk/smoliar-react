import React from 'react';
import Slider from 'react-slick';
import s from './style.css';
import First from '../First';
import ArrowPrev from '../../icons/arrow-prev';
import ArrowNext from '../../icons/arrow-next';
import Facebook from '../../icons/facebook';
import Twitter from '../../icons/twitter';
import LinkedIn from '../../icons/linkedin';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next(e) {
    e.preventDefault();
    this.slider.slickNext();
  }
  previous(e) {
    e.preventDefault();
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      arrows: false,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    console.log(this.props.nextItem);

    return (
      <div className="container">
        <First title={this.props.data.title} description={this.props.data.description} />
        <section className={s.body}>
          <article className={s.post}>
            <div className={s.share}>
              <a href=""><Facebook /></a>
              <a href=""><Twitter /></a>
              <a href=""><LinkedIn /></a>
            </div>
            <p className={s.preface}>{this.props.data.intro}</p>
            <p>{this.props.data.firstHalf}</p>
            <div className={s.sliderWrapper}>
              <a className={s.arrowPrev} onClick={this.previous} href=""><ArrowPrev /></a>
              <a className={s.arrowNext} onClick={this.next} href=""><ArrowNext /></a>
              <Slider {...settings} ref={ref => (this.slider = ref)}>
                <div><img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
                <div><img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
                <div><img src="https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
              </Slider>
            </div>
            <p>{this.props.data.secondHalf}</p>
          </article>
          <section className={s.related}>
            <p className={s.relatedTitle}>See also</p>
            <div className={s.items}>
              <div className={s.item}>
                {/* <span className={s.category}>{this.props.nextItem.category}</span> */}
                <div>
                  {/* <h1 className={s.itemTitle}>{this.props.nextItem.title}</h1> */}
                  <span to="/about" className={s.link}>read more</span>
                </div>
              </div>
              <div className={s.item}>
                {/* <span className={s.category}>{this.props.previousItem.category}</span> */}
                <div>
                  {/* <h1 className={s.itemTitle}>{this.props.previousItem.title}</h1> */}
                  <span to="/about" className={s.link}>read more</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default BlogPost;
