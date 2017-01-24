import express from 'express';
import bodyParser from 'body-parser';
import db from './config';
import Quote from './models/quote'
import path from 'path';

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var dummyQuotes = [{
  quote: 'Something inspirational'
},
{
  quote: 'Something else'
},
{
  quote: 'Something please'
}]

app.get('/quotes', (request, response) => {
  //response.send(dummyQuotes)
  Quote.find((err, quotes) => {
    if (err) throw err;
    response.send(quotes)
  })
})

app.post('/quotes', (request, response) => {
  console.log('request :', request.body);
  var newQuote = new Quote(request.body);

  newQuote.save((err, quote) => {
    if (err) throw err;
    response.send(quote)
  })  
})

app.use(express.static(path.join(__dirname, '../client')))

module.exports = app;