import React from 'react';
import Slider from 'react-slick';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowPrev from '../../icons/arrow-prev';
import ArrowNext from '../../icons/arrow-next';
import Facebook from '../../icons/facebook';
import Twitter from '../../icons/twitter';
import LinkedIn from '../../icons/linkedin';
import Footer from '../Footer';

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

    return (
      <div className="container">
        <section className={s.first}>
          <div className={s.logoContainer}><Logo /></div>
          <h1 className={s.title}>Fire Up Your Motivation</h1>
          <p className={s.topDescription}>You may be a skillful,
          effective employer but if you don’t trust
          your personnel and the opposite, then the chances of
          improving and expanding the business you deal with,
          are extremely limited.</p>
        </section>
        <section className={s.body}>
          <article className={s.post}>
            <div className={s.share}>
              <a href=""><Facebook /></a>
              <a href=""><Twitter /></a>
              <a href=""><LinkedIn /></a>
            </div>
            <p className={s.preface}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto unde voluptatibus praesentium, id. Sit vero quo nulla, quibusdam accusamus, enim nam sint culpa, eveniet iusto excepturi odit iste quae qui!</p>
            <div className={s.sliderWrapper}>
              <a className={s.arrowPrev} onClick={this.previous} href=""><ArrowPrev /></a>
              <a className={s.arrowNext} onClick={this.next} href=""><ArrowNext /></a>
              <Slider {...settings} ref={ref => (this.slider = ref)}>
                <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
                <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
                <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider} /></div>
              </Slider>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam dicta laborum quaerat, illum quos, dolor vitae. Consequatur qui totam nam saepe, odit, debitis omnis necessitatibus libero, ratione eveniet nobis quisquam.</p>
          </article>
          <section className={s.related}>
            <p className={s.relatedTitle}>See also</p>
            <div className={s.items}>
              <div className={s.item}>
                <span className={s.category}>Work</span>
                <div>
                  <h1 className={s.itemTitle}>Change Your Mind Change Your Luck</h1>
                  <span to="/about" className={s.link}>read more</span>
                </div>
              </div>
              <div className={s.item}>
                <span className={s.category}>Work</span>
                <div>
                  <h1 className={s.itemTitle}>Change Your Mind Change Your Luck</h1>
                  <span to="/about" className={s.link}>read more</span>
                </div>
              </div>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    );
  }
}

export default BlogPost;
