import React from 'react';
import s from './style.css';
import Cross from '../../icons/cross';

const Modal = ({ show, onClick }) => (
  <div className={s.overlay + (show ? ' is-open' : ' ')}>
    <div className={s.modal}>
      <span className={s.close} href="" onClick={onClick}><Cross /></span>
      <div className={s.img} />
      <div className={s.content}>
        <h1 className={s.title}>book me</h1>
        <p>If you interested in contacting me, please drop me a line.</p>
        <a className={s.link} href="mailto:aasmoliar@gmail.com">Book me</a>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  show: React.PropTypes.bool,
  onClick: React.PropTypes.func,
};

export default Modal;
