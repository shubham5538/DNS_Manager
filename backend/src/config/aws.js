// src/config/aws.js

const AWS = require('aws-sdk');
require('dotenv').config(); // Correct import for dotenv

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const route53 = new AWS.Route53();

module.exports = route53;
