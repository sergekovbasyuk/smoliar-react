import React from 'react';
import { Link } from 'react-router';
import s from './style.css';

const Footer = () => (
  <div className={s.footerContainer}>
    <div className={s.contentContacts}>
      <h1 className={s.title}>Get in touch</h1>
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
      <a href="/aleksei_smoliar_cv.pdf">Download my CV</a>
      <a href="http://shortcute.xyz/" target="_blank" rel="noopener noreferrer">created at /shortcute</a>
    </footer>
  </div>
);

export default Footer;
