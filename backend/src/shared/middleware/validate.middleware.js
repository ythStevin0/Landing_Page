/**
 * validate.middleware.js
 * Menjalankan validasi Joi schema sebelum request masuk ke controller.
 * Gunakan di routes: router.post('/', validate(schema), controller.create)
 */

const { sendError } = require('../utils/apiResponse');
const HTTP_STATUS = require('../constants/httpStatus');

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errors = error.details.map((d) => d.message.replace(/['"]/g, ''));
    return sendError(res, HTTP_STATUS.UNPROCESSABLE_ENTITY, 'Data yang dikirim tidak valid', errors);
  }

  next();
};

module.exports = validate;
