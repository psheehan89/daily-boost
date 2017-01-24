import React from 'react';

export default class QuoteItem extends React.Component {
  constructor(props) {
    super(props);
  }

  //Issue some command to query the database to pull a random quote
  handleNewQuote() {
    console.log(this.props.handleNewQuoteClick)
  }

  render() {
    console.log(this.props)
    return (
      <div className='quote'>{this.props.quote}</div>
    )
  }
}