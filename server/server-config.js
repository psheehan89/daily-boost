import express from 'express';
import bodyParser from 'body-parser';
import db from './config';
import Quote from './models/quote'

var app = express();
app.use(bodyParser.json());

module.exports = app;