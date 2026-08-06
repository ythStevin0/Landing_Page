/**
 * material.model.js
 * Schema MongoDB untuk katalog material bangunan + harga.
 */

const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama material wajib diisi'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      enum: ['Dinding', 'Atap', 'Lantai', 'Pondasi', 'Finishing', 'Sanitasi', 'Lainnya'],
    },
    unit: {
      type: String,
      required: [true, 'Satuan wajib diisi'],
      // Contoh: "per biji", "per m²", "per zak"
    },
    price: {
      type: Number,
      required: [true, 'Harga wajib diisi'],
      min: [0, 'Harga tidak boleh negatif'],
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // otomatis tambah createdAt & updatedAt
    collection: 'materials',
  }
);

// Index untuk mempercepat pencarian berdasarkan kategori & nama
materialSchema.index({ category: 1, name: 1 });

module.exports = mongoose.model('Material', materialSchema);
