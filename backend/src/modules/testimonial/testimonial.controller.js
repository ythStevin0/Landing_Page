const testimonialService = require('./testimonial.service');
const { sendSuccess } = require('../../shared/utils/apiResponse');
const asyncHandler = require('../../shared/utils/asyncHandler');
const HTTP_STATUS = require('../../shared/constants/httpStatus');

const getAll = asyncHandler(async (req, res) => {
  const result = await testimonialService.getAllTestimonials(req.query);
  sendSuccess(res, HTTP_STATUS.OK, 'Data testimoni berhasil diambil', result.data, result.pagination);
});

const create = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.createTestimonial(req.body);
  sendSuccess(res, HTTP_STATUS.CREATED, 'Testimoni berhasil ditambahkan', testimonial);
});

const update = asyncHandler(async (req, res) => {
  const testimonial = await testimonialService.updateTestimonial(req.params.id, req.body);
  sendSuccess(res, HTTP_STATUS.OK, 'Testimoni berhasil diupdate', testimonial);
});

const remove = asyncHandler(async (req, res) => {
  await testimonialService.deleteTestimonial(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Testimoni berhasil dihapus');
});

module.exports = { getAll, create, update, remove };
