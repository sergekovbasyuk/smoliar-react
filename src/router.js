import React from 'react';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'react-router/node_modules/history';
import mainLayout from './components/layouts/mainLayout';
import blogContainer from './components/containers/blogContainer';
import worksContainer from './components/containers/worksContainer';
import workPageContainer from './components/containers/workPageContainer';
import blogPostContainer from './components/containers/blogPostContainer';
import aboutContainer from './components/containers/aboutContainer';
import scheduleContainer from './components/containers/scheduleContainer';
import mainPageContainer from './components/containers/mainPageContainer';

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

function NoMatch() {
  return <div>Not found</div>;
}

const AppRouter = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={appHistory}>
    <Route path="/" component={mainLayout}>
      <IndexRoute component={mainPageContainer} />
      <Route path="/works" component={worksContainer} />
      <Route path="/blog" component={blogContainer} />
      <Route path="/about" component={aboutContainer} />
      <Route path="/works/:name" component={workPageContainer} />
      <Route path="/blog/:name" component={blogPostContainer} />
      <Route path="/contact" component={scheduleContainer} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default AppRouter;
