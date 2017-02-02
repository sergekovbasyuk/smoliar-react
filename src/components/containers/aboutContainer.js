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
    client.getEntries({
      content_type: 'aboutMe',
    })
      .then(response => this.setState({
        data: response.items[0].fields,
      })
    )
      .catch(error => console.log(error));
  }


  componentWillUnmount() {
    this.unmounted = true;
  }

  getYouTubeID(url) {
    let ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (url[2] !== undefined) {
      ID = url[2].split(/[^0-9a-z_\-]/i);
      ID = ID[0];
    } else {
      ID = url;
    }
    return ID.toString();
  }

  render() {
    const videoId = this.state.data.videoLink === undefined ? null : this.getYouTubeID(this.state.data.videoLink);

    return (
      <AboutPage data={this.state.data} videoId={videoId} />
    );
  }
}

export default aboutContainer;
