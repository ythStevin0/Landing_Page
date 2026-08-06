/**
 * errorMessages.js
 * Pesan error standar agar konsisten di seluruh aplikasi.
 * Gunakan: ERROR_MESSAGES.NOT_FOUND('Material')
 */

const ERROR_MESSAGES = {
  NOT_FOUND: (resource) => `${resource} tidak ditemukan`,
  ALREADY_EXISTS: (resource) => `${resource} sudah ada`,
  INVALID_CREDENTIALS: 'Email atau password salah',
  UNAUTHORIZED: 'Akses ditolak. Token tidak valid atau sudah kadaluarsa',
  FORBIDDEN: 'Anda tidak memiliki izin untuk melakukan aksi ini',
  VALIDATION_ERROR: 'Data yang dikirim tidak valid',
  SERVER_ERROR: 'Terjadi kesalahan pada server. Coba lagi nanti',
};

module.exports = ERROR_MESSAGES;
