const express = require('express');
const router = express.Router();

const contactController = require('./contact.controller');
const { authenticate } = require('../../shared/middleware/auth.middleware');
const validate = require('../../shared/middleware/validate.middleware');
const { createContactSchema } = require('./contact.validation');

// Public: kirim form kontak
router.post('/', validate(createContactSchema), contactController.create);

// Admin only: lihat leads & mark as read
router.get('/', authenticate, contactController.getAll);
router.patch('/:id/read', authenticate, contactController.markAsRead);

module.exports = router;
