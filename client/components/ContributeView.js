import React from 'react';
import { Link } from 'react-router';


export default class QuoteView extends React.Component {
  render() {
    return (
      <div>
        <Link to='QuoteView'><button onClick={this.handleNewQuoteClick}>Nevermind, I want quotes!</button></Link>
        <button onClick={this.handleContributeClick}>Submit my entry!</button>
      </div>
    )
  }

  handleNewQuoteClick() {
    console.log('you want quotes');
  }

  handleContributeClick() {
    console.log('we\'ll send that for you');
  }
}