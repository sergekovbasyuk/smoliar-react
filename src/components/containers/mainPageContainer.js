import React from 'react';
import { Link } from 'react-router';
import 'fullpage.js';
import jquery from 'jquery';
import s from '../views/mainPage/style.css';
import FacebookR from '../icons/facebook_r';
import InstagramR from '../icons/instagram_r';
import First from '../views/mainPage/First';
import AboutMe from '../views/mainPage/AboutMe';
import Works from '../views/mainPage/Works';
import Resources from '../views/mainPage/Resources';
import client from '../../config';

class mainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntries({
      content_type: 'mainPage',
    })
      .then(response => this.setState({
        data: response.items[0].fields,
      })
    )
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

    let style;

    if (getInTouchBackgroundImage) {
      style = {
        backgroundImage: `url(${getInTouchBackgroundImage.fields.file.url})`,
      };
    } else {
      style = null;
    }

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
        <section className="section" style={style}>
          <div className={s.footerContainer}>
            <div className={s.contentContacts}>
              <h1 className={s.footerTitle}>Get in touch</h1>
              <div className={s.row}>
                <div className={s.email}>
                  <p>If you are interested in contacting me, please drop me a line.</p>
                  <a href="mailto:aasmoliar@gmail.com" className={s.link}>leave me a message</a>
                </div>
                <div className={s.schedule}>
                  <p>I’m busy as usual, so please check my schedule.</p>
                  <Link to="/contact" className={s.link}>my schedule</Link>
                </div>
              </div>
            </div>
            <footer className={s.footer}>
              <a href="/aleksei_smoliar_cv.pdf" className={s.cvLink}>Download my CV</a>
              <div className={s.socialIcons}>
                <a className={s.social} href={facebookLink}><FacebookR /></a>
                <a className={s.social} href={instagramLink}><InstagramR /></a>
              </div>
              <a href="http://shortcute.xyz/" target="_blank" rel="noopener noreferrer">created at /shortcute</a>
            </footer>
          </div>
        </section>
      </div>
    );
  }
}

export default mainPage;
