import React from 'react';
import { Link } from 'react-router';
import s from './style.css';
import FacebookR from '../../icons/facebook_r';
import InstagramR from '../../icons/instagram_r';

const GetInTouch = ({ backgroundImage, instagramLink, facebookLink }) => {
  let style;

  if (backgroundImage) {
    style = {
      backgroundImage: `url(${backgroundImage.fields.file.url})`,
    };
  }

  return (
    <section className="section dynamic-background" style={style}>
      <div className={s.footerContainer}>
        <div className={s.contentContacts}>
          <h1 className={s.footerTitle}>Get in touch</h1>
          <div className={s.row}>
            <div className={s.email}>
              <p>let’s make something together</p>
              <a href="mailto:film@smoliar.works" className={s.link}>leave me a message</a>
            </div>
            <div className={s.schedule}>
              <p>check my availability</p>
              <Link to="/contact" className={s.link}>my schedule</Link>
            </div>
          </div>
        </div>
        <footer className={s.footer}>
          <a href="https://www.dropbox.com/sh/rluwf44w3fgqt3c/AAACa9uZKk6nW1JxfjSttIqea?dl=0" target="_blank" rel="noopener noreferrer" className={s.cvLink}>Download my CV</a>
          <div className={s.socialIcons}>
            <a className={s.social} href={facebookLink}><FacebookR /></a>
            <a className={s.social} href={instagramLink}><InstagramR /></a>
          </div>
          <a href="http://shortcute.xyz/" target="_blank" rel="noopener noreferrer">created at /shortcute</a>
        </footer>
      </div>
    </section>
  );
};

GetInTouch.propTypes = {
  backgroundImage: React.PropTypes.object,
  instagramLink: React.PropTypes.string,
  facebookLink: React.PropTypes.string,
};

export default GetInTouch;
