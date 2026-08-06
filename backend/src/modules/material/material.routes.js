/**
 * material.routes.js
 * Mendefinisikan semua endpoint untuk domain material.
 *
 * Public  : GET (tidak perlu login)
 * Admin   : POST, PUT, DELETE (butuh JWT token)
 */

const express = require('express');
const router = express.Router();

const materialController = require('./material.controller');
const { authenticate } = require('../../shared/middleware/auth.middleware');
const validate = require('../../shared/middleware/validate.middleware');
const { createMaterialSchema, updateMaterialSchema } = require('./material.validation');

// ─── Public Routes ────────────────────────────────────────
// GET /api/v1/materials         — List semua material (support ?category=&page=&limit=)
router.get('/', materialController.getAll);

// GET /api/v1/materials/:id     — Detail satu material
router.get('/:id', materialController.getById);

// ─── Admin Routes (JWT required) ─────────────────────────
// POST /api/v1/materials        — Tambah material baru
router.post('/', authenticate, validate(createMaterialSchema), materialController.create);

// PUT /api/v1/materials/:id     — Update material
router.put('/:id', authenticate, validate(updateMaterialSchema), materialController.update);

// DELETE /api/v1/materials/:id  — Hapus material
router.delete('/:id', authenticate, materialController.remove);

module.exports = router;
