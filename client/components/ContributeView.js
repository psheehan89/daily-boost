import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';


export default class QuoteView extends React.Component {
  render() {
    return (
      <div>
        <input type="text" className="form-control" placeholder="Say something nice!"/>
        <button 
          className='btn btn-default' 
          onClick={this.handleNewQuoteClick}>
          <Link to='QuoteView'>Nevermind, I want quotes!</Link>
        </button>
        <button 
          className='btn btn-default' 
          type='submit' 
          onClick={this.handleContributeClick}>Submit my entry!
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