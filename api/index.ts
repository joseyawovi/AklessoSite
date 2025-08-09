// Vercel serverless function entry point
import handler from '../dist/index.js';

export default (req, res) => {
  return handler(req, res);
};
