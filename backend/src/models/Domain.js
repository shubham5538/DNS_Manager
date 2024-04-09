// src/models/Domain.js

const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Domain', domainSchema);
