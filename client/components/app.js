import React from 'react';
import Header from './Header';
import QuoteView from './QuoteView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
}