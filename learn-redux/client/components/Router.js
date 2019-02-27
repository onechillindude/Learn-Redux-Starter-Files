import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import PhotoGrid from './PhotoGrid';
import Single from './Single';




import App from './App';
import NotFound from './NotFound'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Router;
