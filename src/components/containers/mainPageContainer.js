import React from 'react';
import 'fullpage.js';
import jquery from 'jquery';
import First from '../views/mainPage/First';
import AboutMe from '../views/mainPage/AboutMe';
import Works from '../views/mainPage/Works';
import Resources from '../views/mainPage/Resources';
import GetInTouch from '../views/mainPage/GetInTouch';
import client from '../../config';

class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: 'mainPage' })
      .then(response => this.setState({ data: response.items[0].fields }))
      .catch(error => console.log(error));

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

  arrowClickHandler(e) {
    e.preventDefault();
    jquery.fn.fullpage.moveSectionDown();
  }

  render() {
    const {
      quotation,
      quoteAuthor,
      aboutMe,
      myWorks,
      usefulResources,
      instagramLink,
      facebookLink,
      firstBackgroundImage,
      aboutBackgroundImage,
      worksBackgroundImage,
      resourcesBackgroundImage,
      getInTouchBackgroundImage,
    } = this.state.data;

    return (
      <div className="container">
        <First
          quotation={quotation}
          quoteAuthor={quoteAuthor}
          arrowClickHandler={this.arrowClickHandler}
          backgroundImage={firstBackgroundImage}
        />
        <AboutMe
          aboutMe={aboutMe}
          backgroundImage={aboutBackgroundImage}
        />
        <Works
          myWorks={myWorks}
          backgroundImage={worksBackgroundImage}
        />
        <Resources
          usefulResources={usefulResources}
          backgroundImage={resourcesBackgroundImage}
        />
        <GetInTouch
          backgroundImage={getInTouchBackgroundImage}
          instagramLink={instagramLink}
          facebookLink={facebookLink}
        />
      </div>
    );
  }
}

export default mainPage;
