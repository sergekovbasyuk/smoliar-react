import React from 'react';
import s from './style.css';
import Footer from '../Footer';
import Logo from '../../icons/logo';
import Benefits from '../../icons/benefits';
import Produce from '../../icons/produce';
import Shooting from '../../icons/shooting';
import Slider from 'react-slick';

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      arrows: false, 
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider}/></div>
        <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider}/></div>
        <div><img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg" alt="" className={s.slider}/></div>
      </Slider>
    );
  }
});

class SimplePage extends React.Component {
  render() {
    return (
      <div className='container'>
        <section className={s.first}>
          <div className={s.logoContainer}><Logo /></div>
          <h1 className={s.title}>{this.props.data.title}</h1>
        </section>
        <section className={s.second}>
          <div className={s.content}>
            <div className={s.description}>
              <h1 className={s.minorTitle}>A group of Soviet Superheroes</h1>
              <p className={s.text}>Set during the Cold War, a secret organization named "Patriot" gathered a group of Soviet superheroes, altering and augmenting the DNA of four individuals, in order to defend the homeland from supernatural threats. The group includes representatives of the different nationalities of the Soviet Union.</p>
            </div>
          </div>
        </section>
        <section className={s.section}>
          <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/slide-about_buecme.jpg" alt="" className={s.image}/>
          <div className={s.content}>
            <h1 className={s.minorDescription}>The film is about a group of <span className={s.yellow}>Soviet superheroes</span> created during the Cold War.</h1>
          </div>
        </section>
        <section className={s.section}>
          <div className={s.content}>
            <div className={s.minorDescription}>
              <h1 className={s.minorTitle}>A group of Soviet Superheroes</h1>
              <p className={s.text}>Set during the Cold War, a secret organization named "Patriot" gathered a group of Soviet superheroes, altering and augmenting the DNA of four individuals, in order to defend the homeland from supernatural threats. The group includes representatives of the different nationalities of the Soviet Union.</p>
            </div>
          </div>
          <div className={s.content}>
            <div className={s.minorDescription}>
              <div className={s.item}>
                <Benefits />
                <div>
                  <h3>Benefits</h3>
                  <p>As a business owner or manager, the decision to opt for offshore software development can be difficult.</p>
                </div>
              </div>
              <div className={s.item}>
                <Produce />
                <div>
                  <h3>Produce</h3>
                  <p>As a business owner or manager, the decision to opt for offshore software development can be difficult.</p>
                </div>
              </div>
              <div className={s.item}>
                <Shooting />
                <div>
                  <h3>Shooting</h3>
                  <p>As a business owner or manager, the decision to opt for offshore software development can be difficult.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.videoWrapper}>
          <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen></iframe>
        </section>

        <section className={s.section}>
          <div className={s.content}>
            <SimpleSlider />
          </div>
          <div className={s.content}>
            <div className={s.minorDescription}>
              <h1 className={s.minorTitle}>A group of Soviet Superheroes</h1>
              <p className={s.text}>Set during the Cold War, a secret organization named "Patriot" gathered a group of Soviet superheroes, altering and augmenting the DNA of four individuals, in order to defend the homeland from supernatural threats. The group includes representatives of the different nationalities of the Soviet Union.</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default SimplePage;
