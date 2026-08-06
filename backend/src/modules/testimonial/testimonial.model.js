const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, 'Nama klien wajib diisi'],
      trim: true,
    },
    location: {
      type: String,
      required: [true, 'Lokasi klien wajib diisi'],
    },
    message: {
      type: String,
      required: [true, 'Pesan testimoni wajib diisi'],
      trim: true,
    },
    rating: {
      type: Number,
      required: [true, 'Rating wajib diisi'],
      min: [1, 'Rating minimal 1'],
      max: [5, 'Rating maksimal 5'],
    },
    avatar: {
      type: String,
      default: '',
    },
    isVisible: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true, collection: 'testimonials' }
);

module.exports = mongoose.model('Testimonial', testimonialSchema);
