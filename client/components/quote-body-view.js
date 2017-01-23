import React from 'react';
import QuoteView from './quote-view'

export default class QuoteBody extends React.Component {

  render() {
    return (
      <div>
        <QuoteView />
        <button>Get Another Quote</button>
        <button>Contribute Your Own!</button>
      </div>
    )
  }
}