const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama wajib diisi'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Nomor telepon wajib diisi'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: '',
    },
    message: {
      type: String,
      required: [true, 'Pesan wajib diisi'],
      trim: true,
    },
    service: {
      type: String,
      enum: ['Jasa Bangun', 'Renovasi', 'Konsultasi', 'Info Material', 'Lainnya'],
      default: 'Lainnya',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: 'contacts' }
);

module.exports = mongoose.model('Contact', contactSchema);
