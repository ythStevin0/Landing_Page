/**
 * material.controller.js
 * Bertanggung jawab HANYA untuk:
 *   1. Membaca data dari req (params, query, body)
 *   2. Memanggil service yang sesuai
 *   3. Mengirim response via apiResponse helper
 *
 * Tidak ada business logic / query database di sini.
 */

const materialService = require('./material.service');
const { sendSuccess, sendError } = require('../../shared/utils/apiResponse');
const asyncHandler = require('../../shared/utils/asyncHandler');
const HTTP_STATUS = require('../../shared/constants/httpStatus');

const getAll = asyncHandler(async (req, res) => {
  const result = await materialService.getAllMaterials(req.query);
  sendSuccess(res, HTTP_STATUS.OK, 'Data material berhasil diambil', result.data, result.pagination);
});

const getById = asyncHandler(async (req, res) => {
  const material = await materialService.getMaterialById(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Detail material berhasil diambil', material);
});

const create = asyncHandler(async (req, res) => {
  const material = await materialService.createMaterial(req.body);
  sendSuccess(res, HTTP_STATUS.CREATED, 'Material berhasil ditambahkan', material);
});

const update = asyncHandler(async (req, res) => {
  const material = await materialService.updateMaterial(req.params.id, req.body);
  sendSuccess(res, HTTP_STATUS.OK, 'Material berhasil diupdate', material);
});

const remove = asyncHandler(async (req, res) => {
  await materialService.deleteMaterial(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Material berhasil dihapus');
});

module.exports = { getAll, getById, create, update, remove };
