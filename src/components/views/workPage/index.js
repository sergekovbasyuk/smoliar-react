import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';
import Q from '../../icons/q';

const title = 'The Guardians';
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio illum sunt facilis nobis a atque hic, nisi, soluta, fugiat ducimus provident! Asperiores, inventore. Repellat, cupiditate, harum. Fuga, eius, perspiciatis! Beatae?';
const secondTitle = 'A group of Soviet Superheroes';
const secondDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio in dolorem asperiores voluptatem, nam ipsa voluptates eius aliquid placeat a ea adipisci repellat fuga minima perferendis facere quae incidunt nulla?';
const releaseDate = 'February 2017';
const thirdText = 'The film is about a group of Soviet superheroes created during the Cold War.';
const thirdImage = 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/slide-about_buecme.jpg';
const fifthImages = ['http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg', 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg', 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg'];
const fifthTitle = 'A group of Soviet Superheroes';
const fifthText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam laborum, voluptate amet! Suscipit earum doloremque quae possimus vitae voluptates, temporibus tempore sapiente vero ex cumque dolore alias. Sed, ea.';

const WorkPage = () => (
  <div className="container">
    <First title={title} description={description} />
    <Second
      title={secondTitle}
      description={secondDescription}
      date={releaseDate}
    />
    <Third
      text={thirdText}
      image={thirdImage}
    />
    <section className={s.videoWrapper}>
      <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
    </section>
    <Four />
    <section className={s.awards}>
      <span>some logos here</span>
    </section>
    <Five
      images={fifthImages}
      title={fifthTitle}
      text={fifthText}
    />
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
  </div>
);


export default WorkPage;
