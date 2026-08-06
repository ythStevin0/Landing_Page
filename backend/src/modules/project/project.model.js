const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul proyek wajib diisi'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Deskripsi proyek wajib diisi'],
      trim: true,
    },
    images: {
      type: [String],
      default: [],
    },
    location: {
      type: String,
      required: [true, 'Lokasi proyek wajib diisi'],
    },
    completedYear: {
      type: Number,
      required: [true, 'Tahun selesai wajib diisi'],
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      enum: ['Rumah Tinggal', 'Renovasi', 'Ruko', 'Gudang', 'Lainnya'],
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: 'projects' }
);

module.exports = mongoose.model('Project', projectSchema);
