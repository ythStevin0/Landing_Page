/**
 * auth.service.js
 * Logic autentikasi admin: login dan generate JWT token.
 * Admin hanya satu akun (sesuai .env) — tidak ada registrasi publik.
 */

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../../config/env');
const ERROR_MESSAGES = require('../../shared/constants/errorMessages');

// Simulasi admin account dari env (bisa diganti dengan model Admin di DB nanti)
let _hashedPassword = null;
const _getHashedPassword = async () => {
  if (!_hashedPassword) {
    _hashedPassword = await bcrypt.hash(env.admin.password, 10);
  }
  return _hashedPassword;
};

const login = async ({ email, password }) => {
  if (email !== env.admin.email) {
    throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
  }

  const hashedPassword = await _getHashedPassword();
  const isMatch = await bcrypt.compare(password, hashedPassword);
  if (!isMatch) {
    throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
  }

  const token = jwt.sign(
    { email: env.admin.email, role: 'admin' },
    env.jwt.secret,
    { expiresIn: env.jwt.expiresIn }
  );

  return { token, expiresIn: env.jwt.expiresIn };
};

module.exports = { login };
