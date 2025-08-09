// Vercel serverless function entry point
const handler = require('../dist/index.js').default;
module.exports = handler;