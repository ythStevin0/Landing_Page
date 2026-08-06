const express = require('express');
const router = express.Router();

const testimonialController = require('./testimonial.controller');
const { authenticate } = require('../../shared/middleware/auth.middleware');
const validate = require('../../shared/middleware/validate.middleware');
const { createTestimonialSchema, updateTestimonialSchema } = require('./testimonial.validation');

// Public
router.get('/', testimonialController.getAll);

// Admin only
router.post('/', authenticate, validate(createTestimonialSchema), testimonialController.create);
router.put('/:id', authenticate, validate(updateTestimonialSchema), testimonialController.update);
router.delete('/:id', authenticate, testimonialController.remove);

module.exports = router;
