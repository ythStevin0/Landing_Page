const projectService = require('./project.service');
const { sendSuccess } = require('../../shared/utils/apiResponse');
const asyncHandler = require('../../shared/utils/asyncHandler');
const HTTP_STATUS = require('../../shared/constants/httpStatus');

const getAll = asyncHandler(async (req, res) => {
  const result = await projectService.getAllProjects(req.query);
  sendSuccess(res, HTTP_STATUS.OK, 'Data proyek berhasil diambil', result.data, result.pagination);
});

const getById = asyncHandler(async (req, res) => {
  const project = await projectService.getProjectById(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Detail proyek berhasil diambil', project);
});

const create = asyncHandler(async (req, res) => {
  const project = await projectService.createProject(req.body);
  sendSuccess(res, HTTP_STATUS.CREATED, 'Proyek berhasil ditambahkan', project);
});

const update = asyncHandler(async (req, res) => {
  const project = await projectService.updateProject(req.params.id, req.body);
  sendSuccess(res, HTTP_STATUS.OK, 'Proyek berhasil diupdate', project);
});

const remove = asyncHandler(async (req, res) => {
  await projectService.deleteProject(req.params.id);
  sendSuccess(res, HTTP_STATUS.OK, 'Proyek berhasil dihapus');
});

module.exports = { getAll, getById, create, update, remove };
