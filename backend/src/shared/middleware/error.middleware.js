/**
 * error.middleware.js
 * Global error handler — dipasang TERAKHIR di app.js setelah semua routes.
 * Menangkap semua error yang di-next(error) dari controller/service.
 */

const { sendError } = require('../utils/apiResponse');
const HTTP_STATUS = require('../constants/httpStatus');
const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  logger.error(`${req.method} ${req.path} — ${err.message}`);

  // Mongoose: document not found
  if (err.name === 'CastError') {
    return sendError(res, HTTP_STATUS.NOT_FOUND, 'ID tidak valid atau data tidak ditemukan');
  }

  // Mongoose: duplicate key (unique field)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return sendError(res, HTTP_STATUS.CONFLICT, `Nilai ${field} sudah digunakan`);
  }

  // Mongoose: validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map((e) => e.message);
    return sendError(res, HTTP_STATUS.BAD_REQUEST, 'Validasi gagal', errors);
  }

  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return sendError(res, HTTP_STATUS.UNAUTHORIZED, 'Token tidak valid');
  }

  // Default: 500
  return sendError(
    res,
    err.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR,
    err.message || 'Terjadi kesalahan pada server'
  );
};

module.exports = errorHandler;
