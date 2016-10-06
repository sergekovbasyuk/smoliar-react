import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import mainLayout from './components/layouts/mainLayout';
import blogContainer from './components/containers/blogContainer';
import worksContainer from './components/containers/worksContainer';
import workPageContainer from './components/containers/workPageContainer';
import blogPostContainer from './components/containers/blogPostContainer';
import aboutContainer from './components/containers/aboutContainer';
import mainPage from './components/views/mainPage';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

function NoMatch() {
  return <div>Not found</div>;
}

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={appHistory}>
    <Route path="/" component={mainLayout}>
      <IndexRoute component={mainPage} />
      <Route path="/works" component={worksContainer} />
      <Route path="/blog" component={blogContainer} />
      <Route path="/about" component={aboutContainer} />
      <Route path="/works/:id" component={workPageContainer} />
      <Route path="/blog/:id" component={blogPostContainer} />
      {/* <Route path="/contacts" component={contactsContainer} /> */}
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default AppRouter;
