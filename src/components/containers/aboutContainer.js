import React from 'react';
import AboutPage from '../views/AboutPage';
import client from '../../config';

class aboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntry('2ZlTxsf0KcEIY4SQ8ccsUq')
      .then(entry => this.setState({
        data: entry.fields,
      }))
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <AboutPage data={this.state.data} />
    );
  }
}

export default aboutContainer;
