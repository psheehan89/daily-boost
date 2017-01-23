import React from 'react';
import Header from './header';
import QuoteBody from './quote-body-view.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <QuoteBody />
      </div>
    )
  }
}