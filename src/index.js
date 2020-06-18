import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';
import App from './pages/Popular';
import Battle from './pages/Battle';
import Nav from './components/nav';
import Result from './components/result';
import "@babel/polyfill";

ReactDOM.render(
  <HashRouter>
    <Nav />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/battle" component={Battle} />
      <Route path="/result" component={Result} />
    </Switch>
  </HashRouter>,
  document.getElementById('root'),
);
