// src/routes/recordRoutes.js

const express = require('express');
const router = express.Router();
const recordService = require('../services/recordService');

// Route to fetch all DNS records
router.get('/', async (req, res) => {
  try {
    const records = await recordService.getAllRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
