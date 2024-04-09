// src/services/recordService.js

const Record = require('../models/Record');

// Function to get all DNS records
async function getAllRecords() {
  try {
    const records = await Record.find();
    return records;
  } catch (error) {
    throw Error('Error fetching DNS records');
  }
}

module.exports = {
  getAllRecords
};
