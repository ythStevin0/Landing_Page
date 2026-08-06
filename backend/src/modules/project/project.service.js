const Project = require('./project.model');
const ERROR_MESSAGES = require('../../shared/constants/errorMessages');

const getAllProjects = async ({ category, isFeatured, page = 1, limit = 9 }) => {
  const filter = {};
  if (category) filter.category = category;
  if (isFeatured !== undefined) filter.isFeatured = isFeatured === 'true';

  const skip = (Number(page) - 1) * Number(limit);
  const total = await Project.countDocuments(filter);
  const data = await Project.find(filter)
    .sort({ completedYear: -1 })
    .skip(skip)
    .limit(Number(limit));

  return {
    data,
    pagination: { total, page: Number(page), limit: Number(limit), totalPages: Math.ceil(total / limit) },
  };
};

const getProjectById = async (id) => {
  const project = await Project.findById(id);
  if (!project) throw new Error(ERROR_MESSAGES.NOT_FOUND('Proyek'));
  return project;
};

const createProject = async (payload) => await Project.create(payload);

const updateProject = async (id, payload) => {
  const project = await Project.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!project) throw new Error(ERROR_MESSAGES.NOT_FOUND('Proyek'));
  return project;
};

const deleteProject = async (id) => {
  const project = await Project.findByIdAndDelete(id);
  if (!project) throw new Error(ERROR_MESSAGES.NOT_FOUND('Proyek'));
  return project;
};

module.exports = { getAllProjects, getProjectById, createProject, updateProject, deleteProject };
