import React from 'react';
import { Link } from 'react-router';
import 'fullpage.js';
import jquery from 'jquery';
import s from './style.css';
import Logo from '../../icons/logo';
import ArrowLeft from '../../icons/arrowLeft';
import Footer from '../Footer';

class mainPage extends React.Component {
  static arrowClickHandler(e) {
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  componentDidMount() {
    jquery('.container').fullpage({
      menu: '#menu',
      css3: true,
      afterLoad: function updateSlideNumber() {
        const slideNumber = document.getElementById('slide-number');
        const bodyClass = document.body.classList[0];

        if (slideNumber) {
          switch (bodyClass) {
            default:
              slideNumber.innerHTML = '01/05';
              break;
            case ('fp-viewing-0'):
              slideNumber.innerHTML = '01/05';
              break;
            case ('fp-viewing-1'):
              slideNumber.innerHTML = '02/05';
              break;
            case ('fp-viewing-2'):
              slideNumber.innerHTML = '03/05';
              break;
            case ('fp-viewing-3'):
              slideNumber.innerHTML = '04/05';
              break;
            case ('fp-viewing-4'):
              slideNumber.innerHTML = '05/05';
              break;
          }
        }
      },
    });
  }

  componentWillUnmount() {
    jquery.fn.fullpage.destroy('all');
  }

  render() {
    return (
      <div className="container">
        <section className="section">
          {/* <video poster="img/screenshot.png" playsinline autoplay muted loop>
            <source src="media/loop-1.mp4" type="video/mp4"></source>
          </video> */}
          <div className={s.logoContainer}><Logo /></div>
          <div className={s.content}>
            <h1 className={s.title}>Hi, there!</h1>
            <br />
            <p>“The challenge is to be strong, but not rude; be kind,
            but not weak; be bold, but not a bully;
            be thoughtful, but not lazy; be humble, but not timid;
            be proud, but not arrogant; have humor, but without folly.”
              <br /><span>– Bob Jeffords on being an effective First AD</span></p>
          </div>
          <a href="" className={s.linkScroll} onClick={this.arrowClickHandler}>
            <ArrowLeft />Scroll down
          </a>
        </section>
        <section className="section">
          <div className={s.content}>
            <h1 className={s.title}>About Me</h1>
            <p>Ukrainian - First Assistant Director</p><br />
            <p>I have more than 6 years international experience as a freelance
            filmmaker making feature films, tv commercials, music videos,
            tv series and shorts.</p>
            <Link to="/about" className={s.link}>read more</Link>
          </div>
        </section>
        <section className="section">
          <div className={s.content}>
            <h1 className={s.title}>My Works</h1>
            <p>Have gone through all facets of production including Animals,
            Children, Crowd Scenes, Cranes, Drones, Explosives,
            Multiple-Cameras, Highway closures, Special Effects,
            Stunts Sequences, Weapon Scenes, Open Water and Underwater filming.</p>
            <Link to="/works" className={s.link}>learn more</Link>
          </div>
        </section>
        <section className="section">
          <div className={s.content}>
            <h1 className={s.title}>Usefull resources</h1>
            <p>He was the director, writer, producer, and production designer
            for Xenogenesis (1978). He then became a production assistant on a
            film called Rock and Roll High School, though uncredited,
            in 1979. While continuing to educate himself in film-making techniques.</p>
            <Link to="/blog" className={s.link}>learn more</Link>
          </div>
        </section>
        <section className="section">
          <Footer />
        </section>
      </div>
    );
  }
}

export default mainPage;
