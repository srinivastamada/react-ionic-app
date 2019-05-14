import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import  Home  from './pages/Home/Home';
import  About  from './pages/About/About';
import  Settings  from './pages/Settings/Settings';
import  NoPage  from './pages/NoPage/NoPage';
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/*" component={NoPage} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
