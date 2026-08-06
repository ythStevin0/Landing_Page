const express = require('express');
const router = express.Router();

const projectController = require('./project.controller');
const { authenticate } = require('../../shared/middleware/auth.middleware');
const validate = require('../../shared/middleware/validate.middleware');
const { createProjectSchema, updateProjectSchema } = require('./project.validation');

// Public
router.get('/', projectController.getAll);
router.get('/:id', projectController.getById);

// Admin only
router.post('/', authenticate, validate(createProjectSchema), projectController.create);
router.put('/:id', authenticate, validate(updateProjectSchema), projectController.update);
router.delete('/:id', authenticate, projectController.remove);

module.exports = router;
