/**
 * auth.middleware.js
 * Memverifikasi JWT token dari header Authorization.
 * Hanya route admin yang memerlukannya.
 * Jika token valid, req.admin diisi dengan payload token.
 */

const jwt = require('jsonwebtoken');
const env = require('../../config/env');
const { sendError } = require('../utils/apiResponse');
const HTTP_STATUS = require('../constants/httpStatus');
const ERROR_MESSAGES = require('../constants/errorMessages');

const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return sendError(res, HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.UNAUTHORIZED);
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, env.jwt.secret);
    req.admin = decoded;
    next();
  } catch {
    return sendError(res, HTTP_STATUS.UNAUTHORIZED, ERROR_MESSAGES.UNAUTHORIZED);
  }
};

module.exports = { authenticate };
