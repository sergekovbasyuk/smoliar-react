import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import First from '../First';
import Second from '../Second';
import Third from '../Third';
import Four from '../Four';
import Five from '../Five';
import Q from '../../icons/q';

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
        <First
          title={data.title}
          description={data.description}
          backgroundImage={data.backgroundImage}
        />
        <Second
          title={data.secondTitle}
          description={data.secondDescription}
          date={data.workDate}
          backgroundImage={data.secondImage}
        />
        <Third
          text={data.thirdTitle}
          image={data.thirdImage}
        />
        <section className={s.videoWrapper}>
          <iframe width="560" height="349" src="https://www.youtube.com/embed/vFwYJYl5GUQ?controls=0&modestbranding=1&rel=0&showinfo=0" frameBorder="0" allowFullScreen />
        </section>
        <Four
          benefitsTitle={data.textSectionTitle}
          benefitsText={data.textSectionContent}
          benefit1Title="Budget"
          benefit1Text={data.budget}
          benefit2Title="Director"
          benefit2Text={data.director}
          benefit3Title="Stars"
          benefit3Text={data.stars}
        />
        <Five
          images={data.carouselImages}
          title="Storyline"
          text={data.storyline}
        />
        <section className={s.quote}>
          <Q />
          <p>{data.quote}</p>
          <p className={s.author}>{data.quoteAuthor}</p>
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
