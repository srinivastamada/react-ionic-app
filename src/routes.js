import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NoPage from './pages/NoPage/NoPage';
import Tabs from './pages/Tabs/Tabs';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Tabs} />

      <Route exact path="/*" component={NoPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
