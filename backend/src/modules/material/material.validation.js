/**
 * material.validation.js
 * Schema validasi Joi untuk input material.
 * Digunakan oleh validate.middleware.js sebelum masuk controller.
 */

const Joi = require('joi');

const createMaterialSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    'string.min': 'Nama minimal 2 karakter',
    'any.required': 'Nama material wajib diisi',
  }),
  category: Joi.string()
    .valid('Dinding', 'Atap', 'Lantai', 'Pondasi', 'Finishing', 'Sanitasi', 'Lainnya')
    .required()
    .messages({
      'any.only': 'Kategori tidak valid',
      'any.required': 'Kategori wajib diisi',
    }),
  unit: Joi.string().required().messages({
    'any.required': 'Satuan wajib diisi',
  }),
  price: Joi.number().min(0).required().messages({
    'number.min': 'Harga tidak boleh negatif',
    'any.required': 'Harga wajib diisi',
  }),
  description: Joi.string().max(500).optional().allow(''),
  image: Joi.string().uri().optional().allow(''),
  isAvailable: Joi.boolean().optional(),
});

const updateMaterialSchema = createMaterialSchema.fork(
  ['name', 'category', 'unit', 'price'],
  (field) => field.optional()
);

module.exports = { createMaterialSchema, updateMaterialSchema };
