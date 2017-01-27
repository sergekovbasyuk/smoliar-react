import React from 'react';
import BlogPost from '../views/BlogPost';
import client from '../../config';

class blogPostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    client.getEntries({ content_type: '4kKuoct9wK5CmtwoEsT4iO' })
      .then(entries => console.log(entries))
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <BlogPost data={this.state.data} />
    );
  }
}

export default blogPostContainer;
