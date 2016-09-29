import React from 'react';
import s from '../../css/style.css';
import Header from '../views/Header';

class mainLayout extends React.Component {
  render() {
    return (
      <div className={s.mainContainer}>
        <Header location={this.props.location}/>
        {this.props.children}
      </div>
		);
  }
}

export default mainLayout;
