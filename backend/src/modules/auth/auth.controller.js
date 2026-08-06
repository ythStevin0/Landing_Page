const authService = require('./auth.service');
const { sendSuccess, sendError } = require('../../shared/utils/apiResponse');
const asyncHandler = require('../../shared/utils/asyncHandler');
const HTTP_STATUS = require('../../shared/constants/httpStatus');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return sendError(res, HTTP_STATUS.BAD_REQUEST, 'Email dan password wajib diisi');
  }

  const result = await authService.login({ email, password });
  sendSuccess(res, HTTP_STATUS.OK, 'Login berhasil', result);
});

module.exports = { login };
