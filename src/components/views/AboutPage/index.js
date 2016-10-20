import React from 'react';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';

const title = 'About me';
const secondTitle = 'A group of Soviet Superheroes';
const secondDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio in dolorem asperiores voluptatem, nam ipsa voluptates eius aliquid placeat a ea adipisci repellat fuga minima perferendis facere quae incidunt nulla?';
const thirdText = 'The film is about a group of Soviet superheroes created during the Cold War.';
const thirdImage = 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/slide-about_buecme.jpg';
const fifthImages = ['http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg', 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg', 'http://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/slide-about2_yg37ce.jpg'];
const fifthTitle = 'A group of Soviet Superheroes';
const fifthText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam laborum, voluptate amet! Suscipit earum doloremque quae possimus vitae voluptates, temporibus tempore sapiente vero ex cumque dolore alias. Sed, ea.';

const AboutPage = () => (
  <div className="container">
    <First title={title} />
    <Second
      title={secondTitle}
      description={secondDescription}
    />
    <Third
      text={thirdText}
      image={thirdImage}
    />
    <section className={s.videoWrapper}>
      <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
    </section>
    <Four />
    <Five
      images={fifthImages}
      title={fifthTitle}
      text={fifthText}
    />
  </div>
);


export default AboutPage;
