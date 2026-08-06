/**
 * server.js
 * Entry point aplikasi.
 * Tugasnya hanya:
 *   1. Konek ke database
 *   2. Jalankan Express app di port yang dikonfigurasi
 *   3. Handle graceful shutdown
 */

const app = require('./src/app');
const connectDatabase = require('./src/config/database');
const env = require('./src/config/env');
const logger = require('./src/shared/utils/logger');

const startServer = async () => {
  await connectDatabase();

  const server = app.listen(env.port, () => {
    logger.info(`Server running in ${env.nodeEnv} mode on port ${env.port}`);
    logger.info(`API Base URL: http://localhost:${env.port}/api/v1`);
    logger.info(`Health check: http://localhost:${env.port}/api/v1/health`);
  });

  // Graceful shutdown: tutup koneksi dengan bersih saat proses dihentikan
  const shutdown = async (signal) => {
    logger.warn(`${signal} received. Shutting down gracefully...`);
    server.close(() => {
      logger.info('HTTP server closed');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
};

startServer();
