//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import App from './components/App';
import QuoteView from './components/QuoteView';
import ContributeView from './components/ContributeView';
  
render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={QuoteView}></IndexRoute>
      <Route path='QuoteView' component={QuoteView}></Route>
      <Route path='ContributeView' component={ContributeView}></Route>
    </Route>
  </Router>, document.getElementById('app'));