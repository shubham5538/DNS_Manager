// src/models/Record.js

const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Record', recordSchema);
