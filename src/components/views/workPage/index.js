import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Q from '../../icons/q';
import Benefits from '../../icons/benefits';
import Produce from '../../icons/produce';
import Shooting from '../../icons/shooting';
import WorkPageSlider from '../WorkPageSlider';

const title = 'The Guardians';
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illum sunt facilis nobis a atque hic, nisi, soluta, fugiat ducimus provident! Asperiores, inventore. Repellat, cupiditate, harum. Fuga, eius, perspiciatis! Beatae?';
const secondTitle = 'A group of Soviet Superheroes';
const secondDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio in dolorem asperiores voluptatem, nam ipsa voluptates eius aliquid placeat a ea adipisci repellat fuga minima perferendis facere quae incidunt nulla?';
const releaseDate = 'February 2017';

const WorkPage = () => (
  <div className="container">
    <First title={title} description={description} />
    <Second
      title={secondTitle}
      description={secondDescription}
      date={releaseDate}
    />
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
    <section className={s.awards}>
      <span>some logos here</span>
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
    <section className={s.quote}>
      <Q />
      <p>Tremblant is based in Canada and has over 90 runs servicing
      millions of skiers each year. With 13 state-of-the-art ski lifts
      and a selection of choices for both snowboarders and skiers Tremblant
      attained its reputation thrååough daring.</p>
      <p className={s.author}>Hugh Jackman, Actor</p>
    </section>
    <section className={s.related}>
      <div className={s.previous}>
        <span to="/about" className={s.link}>previous project</span>
      </div>
      <div className={s.next}>
        <span to="/about" className={s.link}>next project</span>
      </div>
    </section>
    {/* <Footer /> */}
  </div>
);


export default WorkPage;
