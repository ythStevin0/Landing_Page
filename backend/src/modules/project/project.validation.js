const Joi = require('joi');

const createProjectSchema = Joi.object({
  title: Joi.string().min(3).max(150).required(),
  description: Joi.string().min(10).required(),
  images: Joi.array().items(Joi.string().uri()).optional(),
  location: Joi.string().required(),
  completedYear: Joi.number().integer().min(2000).max(new Date().getFullYear()).required(),
  category: Joi.string()
    .valid('Rumah Tinggal', 'Renovasi', 'Ruko', 'Gudang', 'Lainnya')
    .required(),
  isFeatured: Joi.boolean().optional(),
});

const updateProjectSchema = createProjectSchema.fork(
  ['title', 'description', 'location', 'completedYear', 'category'],
  (field) => field.optional()
);

module.exports = { createProjectSchema, updateProjectSchema };
