const jwt = require('jsonwebtoken');
const { NODE_ENV, JWT_SECRET } = process.env;

// const secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret';

const generateToken = (payload) => jwt.sign(payload,
  NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
  { expiresIn: '7d' }
);

module.exports = {
  // secretKey,
  generateToken,
};
