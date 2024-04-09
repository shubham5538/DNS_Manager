// src/controllers/domainController.js

const express = require('express');
const router = express.Router();
const domainService = require('../services/domainService');

// Route to fetch all domains
router.get('/', async (req, res) => {
  try {
    const domains = await domainService.getAllDomains();
    res.json(domains);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
