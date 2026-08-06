const Joi = require('joi');

const createTestimonialSchema = Joi.object({
  clientName: Joi.string().min(2).max(100).required(),
  location: Joi.string().required(),
  message: Joi.string().min(10).max(500).required(),
  rating: Joi.number().integer().min(1).max(5).required(),
  avatar: Joi.string().uri().optional().allow(''),
  isVisible: Joi.boolean().optional(),
});

const updateTestimonialSchema = createTestimonialSchema.fork(
  ['clientName', 'location', 'message', 'rating'],
  (field) => field.optional()
);

module.exports = { createTestimonialSchema, updateTestimonialSchema };
