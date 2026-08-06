/**
 * apiResponse.js
 * Memastikan semua response API memiliki format yang konsisten.
 *
 * Sukses  : { success: true,  message, data, pagination? }
 * Gagal   : { success: false, message, errors? }
 */

const sendSuccess = (res, statusCode, message, data = null, pagination = null) => {
  const response = { success: true, message };
  if (data !== null) response.data = data;
  if (pagination !== null) response.pagination = pagination;
  return res.status(statusCode).json(response);
};

const sendError = (res, statusCode, message, errors = null) => {
  const response = { success: false, message };
  if (errors !== null) response.errors = errors;
  return res.status(statusCode).json(response);
};

module.exports = { sendSuccess, sendError };
