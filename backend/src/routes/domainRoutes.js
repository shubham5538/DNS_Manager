// src/routes/domainRoutes.js

const express = require('express');
const router = express.Router();
const domainController = require('../controllers/domainController');

// Define routes for domain-related operations
router.get('/', domainController);

module.exports = router;
