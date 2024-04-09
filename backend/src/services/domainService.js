// src/services/domainService.js

const Domain = require('../models/Domain');

// Function to get all domains
async function getAllDomains() {
  try {
    const domains = await Domain.find();
    return domains;
  } catch (error) {
    throw Error('Error fetching domains');
  }
}

module.exports = {
  getAllDomains
};
