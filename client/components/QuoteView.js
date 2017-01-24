import React from 'react';
import QuoteItem from './QuoteItem';
import { Link } from 'react-router';
import axios from 'axios';

export default class QuoteView extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: 'Coding got you feeling down? \nClick below to brighten up your day or maybe you can brighten up someones day'
    }
  }

  render() {
    return (
      <div className='text-center'>
        <QuoteItem 
          quote={this.state.quote}
          getNewQuote={this.handleNewQuoteClick.bind(this)}/>
        <button className='btn btn-primary-outline' 
          onClick={this.handleNewQuoteClick.bind(this)}>Get Another Quote
        </button>
        <Link to='ContributeView'>
          <button 
            className='btn btn-primary-outline' 
            onClick={this.handleContributeClick.bind(this)}>Contribute Your Own!
          </button>
        </Link>
      </div>
    )
  }

  handleNewQuoteClick() {;
    axios.get('/quotes')
      .then((response) => {
        // console.log(response.data.length)
        var randomInt = Math.floor(Math.random() * (response.data.length));
        console.log(randomInt)
        this.setState({quote: response.data[randomInt].quote})
      });
    console.log('you requested a new quote');
  }

  handleContributeClick() {
    console.log('you want to contribute something');
  }
}