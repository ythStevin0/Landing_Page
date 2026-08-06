const Joi = require('joi');

const createContactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'any.required': 'Nama wajib diisi',
  }),
  phone: Joi.string()
    .pattern(/^(\+62|62|0)[0-9]{8,13}$/)
    .required()
    .messages({
      'string.pattern.base': 'Format nomor telepon tidak valid',
      'any.required': 'Nomor telepon wajib diisi',
    }),
  email: Joi.string().email().optional().allow(''),
  message: Joi.string().min(5).max(1000).required().messages({
    'any.required': 'Pesan wajib diisi',
  }),
  service: Joi.string()
    .valid('Jasa Bangun', 'Renovasi', 'Konsultasi', 'Info Material', 'Lainnya')
    .optional(),
});

module.exports = { createContactSchema };
