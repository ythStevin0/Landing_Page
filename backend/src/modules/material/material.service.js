/**
 * material.service.js
 * SEMUA business logic untuk domain material ada di sini.
 * Controller hanya memanggil fungsi ini — tidak ada query Mongoose di controller.
 */

const Material = require('./material.model');
const ERROR_MESSAGES = require('../../shared/constants/errorMessages');

/**
 * Ambil semua material dengan opsi filter & pagination.
 * @param {Object} query - { category, isAvailable, page, limit }
 */
const getAllMaterials = async ({ category, isAvailable, page = 1, limit = 12 }) => {
  const filter = {};
  if (category) filter.category = category;
  if (isAvailable !== undefined) filter.isAvailable = isAvailable === 'true';

  const skip = (Number(page) - 1) * Number(limit);
  const total = await Material.countDocuments(filter);
  const data = await Material.find(filter)
    .sort({ category: 1, name: 1 })
    .skip(skip)
    .limit(Number(limit));

  return {
    data,
    pagination: {
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / limit),
    },
  };
};

/**
 * Ambil satu material berdasarkan ID.
 */
const getMaterialById = async (id) => {
  const material = await Material.findById(id);
  if (!material) throw new Error(ERROR_MESSAGES.NOT_FOUND('Material'));
  return material;
};

/**
 * Buat material baru.
 */
const createMaterial = async (payload) => {
  return await Material.create(payload);
};

/**
 * Update material berdasarkan ID.
 */
const updateMaterial = async (id, payload) => {
  const material = await Material.findByIdAndUpdate(id, payload, {
    new: true,         // kembalikan dokumen yang sudah diupdate
    runValidators: true,
  });
  if (!material) throw new Error(ERROR_MESSAGES.NOT_FOUND('Material'));
  return material;
};

/**
 * Hapus material berdasarkan ID.
 */
const deleteMaterial = async (id) => {
  const material = await Material.findByIdAndDelete(id);
  if (!material) throw new Error(ERROR_MESSAGES.NOT_FOUND('Material'));
  return material;
};

module.exports = {
  getAllMaterials,
  getMaterialById,
  createMaterial,
  updateMaterial,
  deleteMaterial,
};
