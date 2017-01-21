import React from 'react';
import axios from 'axios';
import AboutPage from '../views/AboutPage';

const title = 'About Me';
const secondTitle = 'A group of Soviet Superheroes';
const secondDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio in dolorem asperiores voluptatem, nam ipsa voluptates eius aliquid placeat a ea adipisci repellat fuga minima perferendis facere quae incidunt nulla?';
const thirdText = 'The film is about a group of Soviet superheroes created during the Cold War.';
const thirdImage = 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475003357/smoliar/slide-about_buecme.jpg';
const fifthImages = ['https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg', 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg', 'https://res.cloudinary.com/dsie3eeqb/image/upload/v1475062549/smoliar/slide-about2_yg37ce.jpg'];
const fifthTitle = 'A group of Soviet Superheroes';
const fifthText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente quisquam laborum, voluptate amet! Suscipit earum doloremque quae possimus vitae voluptates, temporibus tempore sapiente vero ex cumque dolore alias. Sed, ea.';

class aboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const that = this;
    this.serverRequest =
      axios
        .get('https://cdn.contentful.com/spaces/g2w5ttfmcha9/entries/1ek10CCI4CWcomQKSo4See?access_token=d5db5009e3c4b1ae9c382ce4ba431d0d6c581eb7e528d1d4b2b5d4c8644c5658')
        .then(result => that.setState({
          data: result.data.fields,
        }));
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    return (
      <AboutPage
        data={this.state.data}
        title={title}
        secondTitle={secondTitle}
        secondDescription={secondDescription}
        thirdText={thirdText}
        thirdImage={thirdImage}
        fifthImages={fifthImages}
        fifthTitle={fifthTitle}
        fifthText={fifthText}
      />
    );
  }
}

export default aboutContainer;
