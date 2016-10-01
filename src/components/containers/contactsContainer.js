import React from 'react';
import axios from 'axios';
// import SimplePage from '../views/simplePage';

class contactsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const _this = this;
    this.serverRequest =
      axios
        .get('https://cdn.contentful.com/spaces/g2w5ttfmcha9/entries/35Hz9UWLNu8ewEAYUMWm6S?access_token=d5db5009e3c4b1ae9c382ce4ba431d0d6c581eb7e528d1d4b2b5d4c8644c5658')
        .then(function (response) {
          _this.setState({
            data: response.data.fields,

          });
        });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <SimplePage data={this.state.data} />
    );
  }
}

export default contactsContainer;
