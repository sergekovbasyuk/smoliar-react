import React from 'react';
import s from '../../css/style.css';
import Header from '../views/Header';

const mainLayout = ({ location, children }) => (
  <div className={s.mainContainer}>
    <Header location={location} />
    {children}
  </div>
);

mainLayout.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default mainLayout;
