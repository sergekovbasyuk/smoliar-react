import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

class Footer extends React.Component {
  render() {
    let schedule;

    if (this.props.location.pathname.indexOf('/contact') === 0) {
      schedule = (
        <div className={s.schedule}>
          <p>check my works</p>
          <Link to="/works" className={s.link}>see my works</Link>
        </div>
      );
    } else {
      schedule = (
        <div className={s.schedule}>
          <p>I’m busy as usual, so please check my schedule.</p>
          <Link to="/contact" className={s.link}>my schedule</Link>
        </div>
      );
    }

    if (!this.props) {
      return null;
    }

    return (
      <div className={s.footerContainer}>
        <div className={s.contentContacts}>
          <h1 className={s.title}>Get in touch</h1>
          <div className={s.row}>
            <div className={s.email}>
              <p>let’s make something together</p>
              <a href="mailto:aasmoliar@gmail.com" className={s.link}>leave me a message</a>
            </div>
            {schedule}
          </div>
        </div>
        <footer className={s.footer}>
          <a href="https://www.dropbox.com/sh/rluwf44w3fgqt3c/AAACa9uZKk6nW1JxfjSttIqea?dl=0" target="_blank" rel="noopener noreferrer">Download my CV</a>
          <a href="http://shortcute.xyz/" target="_blank" rel="noopener noreferrer">created at /shortcute</a>
        </footer>
      </div>
    );
  }
}

Footer.propTypes = {
  location: React.PropTypes.object.isRequired,
};

export default Footer;
