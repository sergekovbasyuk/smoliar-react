import React from 'react';
import s from '../../css/style.css';
import Header from '../views/Header';
import MainMenu from '../views/mainMenu';
import SideMenu from '../views/sideMenu';

class mainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuHidden: true,
    };

    this.burgerClickHandler = this.burgerClickHandler.bind(this);
    this.crossClickHandler = this.crossClickHandler.bind(this);
    this.menuItemClickHandler = this.menuItemClickHandler.bind(this);
  }

  burgerClickHandler(e) {
    e.preventDefault();
    this.setState({
      menuHidden: false,
    });
  }

  crossClickHandler(e) {
    e.preventDefault();
    this.setState({
      menuHidden: true,
    });
  }

  menuItemClickHandler() {
    this.setState({
      menuHidden: true,
    });
  }

  render() {
    return (
      <div className={s.mainContainer}>
        <Header
          location={this.props.location}
          burgerClickHandler={this.burgerClickHandler}
        />
        <MainMenu
          hidden={this.state.menuHidden}
          crossClickHandler={this.crossClickHandler}
          menuItemClickHandler={this.menuItemClickHandler}
        />
        <SideMenu location={this.props.location} />
        {this.props.children}
      </div>
    );
  }
}

mainLayout.propTypes = {
  location: React.PropTypes.object.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default mainLayout;
