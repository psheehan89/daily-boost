import React from 'react';
import QuoteItem from './QuoteItem';
import { Link } from 'react-router';

export default class QuoteView extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Pretend this is some inspiring quote'
    }
  }
  render() {
    return (
      <div>
        <QuoteItem 
          quote={this.state.quote}
          getNewQuote={this.handleNewQuoteClick.bind(this)}/>
        <button onClick={this.handleNewQuoteClick}>Get Another Quote</button>
        <Link to='ContributeView'><button onClick={this.handleContributeClick}>Contribute Your Own!</button></Link>
      </div>
    )
  }

  handleNewQuoteClick() {
    console.log('you requested a new quote');
  }

  handleContributeClick() {
    console.log('you want to contribute something');
  }
}