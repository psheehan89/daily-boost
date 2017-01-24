import db from '../config';
import mongoose from 'mongoose';

var quoteSchema = mongoose.Schema({
  quote: String,
  genre: String,
  id: {
    unique: true
  }
  date: {
    type: Date,
    default: Date.now
  }
});

var Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote;