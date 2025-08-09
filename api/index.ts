// Vercel serverless function entry point
const { default: handler } = require('../dist/index.js');

module.exports = (req, res) => {
  return handler(req, res);
};