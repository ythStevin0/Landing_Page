/**
 * env.js
 * Membaca .env dan mengekspornya sebagai objek terstruktur.
 * Jika variabel wajib tidak ada, aplikasi langsung berhenti dengan pesan jelas.
 */

require('dotenv').config();

const _required = (key) => {
  const value = process.env[key];
  if (!value) {
    console.error(`[ENV] Missing required environment variable: ${key}`);
    process.exit(1);
  }
  return value;
};

module.exports = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: _required('MONGO_URI'),
  jwt: {
    secret: _required('JWT_SECRET'),
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  },
  admin: {
    email: process.env.ADMIN_EMAIL || 'admin@bangungriya.com',
    password: process.env.ADMIN_PASSWORD || 'Admin@12345',
  },
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};
