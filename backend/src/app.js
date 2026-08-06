/**
 * app.js
 * Setup Express application:
 *   1. Global middleware (security, logging, parsing)
 *   2. Mount API routes
 *   3. 404 handler
 *   4. Global error handler (HARUS paling akhir)
 *
 * Dipisah dari server.js agar mudah di-test tanpa menjalankan server sungguhan.
 */

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const env = require('./config/env');
const routes = require('./routes');
const errorHandler = require('./shared/middleware/error.middleware');
const { sendError } = require('./shared/utils/apiResponse');
const HTTP_STATUS = require('./shared/constants/httpStatus');

const app = express();

// ─── Security & Utility Middleware ────────────────────────
app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(morgan(env.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── API Routes ───────────────────────────────────────────
app.use('/api/v1', routes);

// ─── 404 Handler ──────────────────────────────────────────
app.use((req, res) => {
  sendError(res, HTTP_STATUS.NOT_FOUND, `Route ${req.method} ${req.path} tidak ditemukan`);
});

// ─── Global Error Handler (harus paling akhir) ────────────
app.use(errorHandler);

module.exports = app;
