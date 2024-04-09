// src/config/database.js

const mongoose = require('mongoose');
require('dotenv').config(); // Correct import for dotenv

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));

module.exports = mongoose;
