const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;


const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

const generateToken = (payload) => jwt.sign(payload, secretKey, { expiresIn: '7d' });

module.exports = {
  secretKey,
  generateToken,
};
