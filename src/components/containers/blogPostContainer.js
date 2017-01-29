import React from 'react';
import BlogPost from '../views/BlogPost';
import client from '../../config';

class blogPostContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      nextItem: {},
      previousItem: {},
    };
  }

  componentDidMount() {
    client.getEntries({
      content_type: 'blogPost',
    })
      .then((response) => {
        const filteredEntry = response.items.filter(item => item.sys.id === this.props.params.name);
        const dataLength = response.items.length;
        const randomNext = (Math.random() * dataLength).toFixed(0);
        const prevNext = (Math.random() * dataLength).toFixed(0);
        const nextEntry = response.items[randomNext];
        const previousEntry = response.items[prevNext];
        this.setState({
          data: filteredEntry[0].fields,
          nextItem: nextEntry,
          previousItem: previousEntry,
        });
      })
      .catch(error => console.log(error));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <BlogPost
        data={this.state.data}
        nextItem={this.state.nextItem}
        previousItem={this.state.previousItem}
      />
    );
  }
}

blogPostContainer.propTypes = {
  params: React.PropTypes.object,
};

export default blogPostContainer;
