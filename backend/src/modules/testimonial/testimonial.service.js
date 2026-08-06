const Testimonial = require('./testimonial.model');
const ERROR_MESSAGES = require('../../shared/constants/errorMessages');

const getAllTestimonials = async ({ isVisible, page = 1, limit = 10 }) => {
  const filter = {};
  // Public hanya tampilkan yang visible; admin bisa lihat semua
  if (isVisible !== undefined) filter.isVisible = isVisible === 'true';
  else filter.isVisible = true;

  const skip = (Number(page) - 1) * Number(limit);
  const total = await Testimonial.countDocuments(filter);
  const data = await Testimonial.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit));

  return {
    data,
    pagination: { total, page: Number(page), limit: Number(limit), totalPages: Math.ceil(total / limit) },
  };
};

const createTestimonial = async (payload) => await Testimonial.create(payload);

const updateTestimonial = async (id, payload) => {
  const testimonial = await Testimonial.findByIdAndUpdate(id, payload, { new: true, runValidators: true });
  if (!testimonial) throw new Error(ERROR_MESSAGES.NOT_FOUND('Testimoni'));
  return testimonial;
};

const deleteTestimonial = async (id) => {
  const testimonial = await Testimonial.findByIdAndDelete(id);
  if (!testimonial) throw new Error(ERROR_MESSAGES.NOT_FOUND('Testimoni'));
  return testimonial;
};

module.exports = { getAllTestimonials, createTestimonial, updateTestimonial, deleteTestimonial };
