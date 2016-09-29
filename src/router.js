import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import mainLayout from './components/layouts/mainLayout';
import newsContainer from './components/containers/newsContainer';
import aboutContainer from './components/containers/aboutContainer';
import contactsContainer from './components/containers/contactsContainer';
import mainPage from './components/views/mainPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false});

function NoMatch(props) {
  return <div>Not found</div>;
}

export default React.createClass({
  render() {
   return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={appHistory}>
        <Route path="/" component={mainLayout}>
          <IndexRoute component={mainPage} />
          <Route path="/blog" component={newsContainer}/>
          <Route path="/about" component={aboutContainer}/>
          <Route path="/contacts" component={contactsContainer}/>
          <Route path="*" component={NoMatch}/>
        </Route>
      </Router>
   );
  },
});
