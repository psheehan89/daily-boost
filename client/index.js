//Client entry point
import React from 'react';
import { render } from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import QuoteView from './components/QuoteView';
import ContributeView from './components/ContributeView';
  
render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={QuoteView}></IndexRoute>
      <Route path='QuoteView' component={QuoteView}></Route>
      <Route path='ContributeView' component={ContributeView}></Route>
      <Route path='/*' component={App} />
    </Route>
  </Router>, document.getElementById('app'));