import express from 'express';
import bodyParser from 'body-parser';
import db from './config';
import Quote from './models/quote';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

var compiler = webpack(webpackConfig);


var app = express();
app.use(require("webpack-hot-middleware")(compiler));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath
}));

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

app.use(express.static('client'))

module.exports = app;