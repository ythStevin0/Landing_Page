/**
 * database.js
 * Mengelola koneksi ke MongoDB menggunakan Mongoose.
 * Dipanggil sekali saat server.js start — bukan diimpor per-request.
 */

const mongoose = require('mongoose');
const env = require('./env');
const logger = require('../shared/utils/logger');

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(env.mongoUri);
    logger.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
