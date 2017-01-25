import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';


export default class QuoteView extends React.Component {
  render() {
    return (
      <div className='text-center'>
        <input type="text" className="form-control transparent-input" placeholder="Say something nice!"/>
        <Link to='QuoteView'>
          <button 
            className='btn btn-primary-outline' 
            onClick={this.handleNewQuoteClick}>
            Go Get New Quotes
          </button>
        </Link>
        <button 
          className='btn btn-primary-outline' 
          type='submit' 
          onClick={this.handleContributeClick}>Submit My Quote
        </button>
      </div>
    )
  }

  handleNewQuoteClick() {
    console.log('you want quotes');
  }

  handleContributeClick() {
    var inputText = document.querySelector('.form-control').value;
    console.log('input text: ', inputText);
    //add quote to the database
    axios.post('/quotes', {quote: inputText})
      .then((response) => console.log('response: ', response.data.quote))
      .then(document.querySelector('.form-control').value = '');
  }
}