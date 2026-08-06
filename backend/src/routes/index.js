/**
 * routes/index.js
 * Aggregator semua module routes.
 * Dipasang ke app.js sebagai satu titik masuk: app.use('/api/v1', routes)
 *
 * Untuk menambah domain baru:
 *   1. Buat folder modules/namadomian/
 *   2. Import dan daftarkan di sini — tidak perlu ubah app.js
 */

const express = require('express');
const router = express.Router();

const materialRoutes = require('../modules/material/material.routes');
const projectRoutes = require('../modules/project/project.routes');
const testimonialRoutes = require('../modules/testimonial/testimonial.routes');
const contactRoutes = require('../modules/contact/contact.routes');
const authRoutes = require('../modules/auth/auth.routes');

router.use('/materials', materialRoutes);
router.use('/projects', projectRoutes);
router.use('/testimonials', testimonialRoutes);
router.use('/contacts', contactRoutes);
router.use('/auth', authRoutes);

// Health check
router.get('/health', (req, res) => {
  res.json({ success: true, message: 'API is running', timestamp: new Date().toISOString() });
});

module.exports = router;
