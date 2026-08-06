/**
 * logger.js
 * Wrapper tipis di atas console agar mudah diganti library logger
 * (misal: winston) tanpa ubah banyak file.
 * Format: [LEVEL] [timestamp] message
 */

const formatMessage = (level, message) => {
  const timestamp = new Date().toISOString();
  return `[${level.toUpperCase()}] [${timestamp}] ${message}`;
};

const logger = {
  info: (message) => console.log(formatMessage('info', message)),
  warn: (message) => console.warn(formatMessage('warn', message)),
  error: (message) => console.error(formatMessage('error', message)),
  debug: (message) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(formatMessage('debug', message));
    }
  },
};

module.exports = logger;
