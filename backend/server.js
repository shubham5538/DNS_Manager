// server.js

const app = require('./app');
const http = require('http');
const mongoose = require('./src/config/database'); // Correct import path for the database module

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
