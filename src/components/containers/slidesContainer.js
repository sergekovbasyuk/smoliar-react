import React from 'react';
import axios from 'axios';
// import SimplePage from '../views/simplePage';

class slidesContainer extends React.Component {
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
        .get('https://cdn.contentful.com/spaces/g2w5ttfmcha9/entries/1ek10CCI4CWcomQKSo4See?access_token=d5db5009e3c4b1ae9c382ce4ba431d0d6c581eb7e528d1d4b2b5d4c8644c5658')
        .then(function (result) {
          _this.setState({
            data: result.data.fields,
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

export default slidesContainer;
