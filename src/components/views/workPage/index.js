import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';
import Q from '../../icons/q';

const thirdImage = 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg';
const fifthImages = ['https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg', 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg', 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg'];

class WorkPage extends React.Component {
  related() {
    const { nextItem, previousItem } = this.props;

    if (!nextItem || !previousItem) {
      return null;
    }

    return (
      <section className={s.related}>
        <div className={s.previous}>
          <Link to={`/works/${nextItem.sys.id}`} className={s.link}>previous project</Link>
        </div>
        <div className={s.next}>
          <Link to={`/works/${previousItem.sys.id}`} className={s.link}>next project</Link>
        </div>
      </section>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div className="container">
        <First title={data.workTitle} description={data.workDescription} />
        <Second
          title={data.workSecondTitle}
          description={data.workSecondDescription}
          date={data.workDate}
        />
        <Third
          text={data.workThirdTitle}
          image={thirdImage}
        />
        <section className={s.videoWrapper}>
          <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
        </section>
        <Four
          benefitsTitle={data.workTextSectionTitle}
          benefitsText={data.workTextSectionContent}
          benefit1Title="Budget"
          benefit1Text={data.budget}
          benefit2Title="Director"
          benefit2Text={data.director}
          benefit3Title="Stars"
          benefit3Text={data.stars}
        />
        <Five
          images={fifthImages}
          title="Storyline"
          text={data.storyline}
        />
        <section className={s.quote}>
          <Q />
          <p>{data.workQuote}</p>
          <p className={s.author}>{data.workQuoteAuthor}</p>
        </section>
        {this.related()}
      </div>
    );
  }
}

WorkPage.propTypes = {
  data: React.PropTypes.object,
  nextItem: React.PropTypes.object,
  previousItem: React.PropTypes.object,
};

export default WorkPage;
