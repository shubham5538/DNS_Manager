const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load dotenv configuration

const domainRoutes = require('./src/routes/domainRoutes'); // Removed 'src/'
const recordRoutes = require('./src/routes/recordRoutes'); // Removed 'src/'
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api/domains', domainRoutes);
app.use('/api/records', recordRoutes);

module.exports = app;
