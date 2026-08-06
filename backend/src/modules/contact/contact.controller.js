const contactService = require('./contact.service');
const { sendSuccess } = require('../../shared/utils/apiResponse');
const asyncHandler = require('../../shared/utils/asyncHandler');
const HTTP_STATUS = require('../../shared/constants/httpStatus');

// Public: kirim form kontak dari landing page
const create = asyncHandler(async (req, res) => {
  const contact = await contactService.createContact(req.body);
  sendSuccess(res, HTTP_STATUS.CREATED, 'Pesan berhasil dikirim. Kami akan menghubungi Anda segera!', contact);
});

// Admin: lihat semua lead yang masuk
const getAll = asyncHandler(async (req, res) => {
  const result = await contactService.getAllContacts(req.query);
  sendSuccess(res, HTTP_STATUS.OK, 'Data kontak berhasil diambil', result.data, result.pagination);
});

// Admin: tandai sudah dibaca
const markAsRead = asyncHandler(async (req, res) => {
  const contact = await contactService.markAsRead(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Kontak ditandai sudah dibaca', contact);
});

module.exports = { create, getAll, markAsRead };
