import React from 'react';
import s from './style.css';
import Footer from '../Footer';
import Logo from '../../icons/logo';
import Benefits from '../../icons/benefits';
import Produce from '../../icons/produce';
import Shooting from '../../icons/shooting';
import WorkPageSlider from '../WorkPageSlider';

const AboutPage = () => (
  <div className="container">
    <section className={s.first}>
      <div className={s.logoContainer}><Logo /></div>
      <h1 className={s.title}>About me</h1>
    </section>
    <section className={s.second}>
      <div className={s.bg} />
      <div className={s.secondContent}>
        <div className={s.description}>
          <h1 className={s.minorTitle}>A group of Soviet Superheroes</h1>
          <p className={s.text}>Set during the Cold War,
          a secret organization named &quot;Patriot&quot; gathered a group
          of Soviet superheroes, altering and augmenting the DNA of four
          individuals, in order to defend the homeland from supernatural
          threats. The group includes representatives of the different
          nationalities of the Soviet Union.</p>
        </div>
      </div>
    </section>
    <section className={s.section}>
      <img src="http://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/slide-about_buecme.jpg" alt="" className={s.image} />
      <div className={s.content}>
        <h1 className={s.minorDescription}>The film is about a group of
          <span className={s.yellow}> Soviet superheroes </span>
        created during the Cold War.</h1>
      </div>
    </section>
    <section className={s.videoWrapper}>
      <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
    </section>
    <section className={s.section}>
      <div className={s.content}>
        <div className={s.description}>
          <h1 className={s.minorTitle}>My Gear</h1>
          <p className={s.text}>If you are looking for a new way to promote
          your business that won’t cost you more money, maybe printing
          is one of the options you won’t resist. Printing is a widely
          use process in making printed materials that are used for
          advertising. Brochure, catalogs, flyers, banners, posters,
          and booklets are some of several examples of printed materials.
          Nowadays, making printed materials have become fast, easy and simple.
          If you want your promotional material to be an eye-catching object,
          you should make it colored. By way of using inkjet printer
          this is not hard to make.</p>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.items}>
          <div className={s.item}>
            <Benefits />
            <div>
              <h3 className={s.benefitsTitle}>Benefits</h3>
              <p className={s.benefitsText}>As a business owner or manager,
              the decision to opt for offshore software development can be
              difficult.</p>
            </div>
          </div>
          <div className={s.item}>
            <Produce />
            <div>
              <h3 className={s.benefitsTitle}>Produce</h3>
              <p className={s.benefitsText}>As a business owner or manager,
              the decision to opt for offshore software development can be difficult.</p>
            </div>
          </div>
          <div className={s.item}>
            <Shooting />
            <div>
              <h3 className={s.benefitsTitle}>Shooting</h3>
              <p className={s.benefitsText}>As a business owner or manager,
              the decision to opt for offshore software development can be
              difficult.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className={s.section}>
      <div className={s.sliderContainer}>
        <WorkPageSlider />
      </div>
      <div className={s.content}>
        <div className={s.description}>
          <h1 className={s.minorTitle}>A group of Soviet Superheroes</h1>
          <p className={s.text}>Set during the Cold War, a secret
          organization named &quot;Patriot&quot; gathered a group of Soviet
          superheroes, altering and augmenting the DNA of four individuals,
          in order to defend the homeland from supernatural threats.
          The group includes representatives of the different nationalities
          of the Soviet Union.</p>
        </div>
      </div>
    </section>
    <Footer />
  </div>
);


export default AboutPage;
