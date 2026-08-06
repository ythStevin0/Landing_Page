const Contact = require('./contact.model');
const ERROR_MESSAGES = require('../../shared/constants/errorMessages');

const createContact = async (payload) => await Contact.create(payload);

const getAllContacts = async ({ isRead, page = 1, limit = 20 }) => {
  const filter = {};
  if (isRead !== undefined) filter.isRead = isRead === 'true';

  const skip = (Number(page) - 1) * Number(limit);
  const total = await Contact.countDocuments(filter);
  const data = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(Number(limit));

  return {
    data,
    pagination: { total, page: Number(page), limit: Number(limit), totalPages: Math.ceil(total / limit) },
  };
};

const markAsRead = async (id) => {
  const contact = await Contact.findByIdAndUpdate(id, { isRead: true }, { new: true });
  if (!contact) throw new Error(ERROR_MESSAGES.NOT_FOUND('Kontak'));
  return contact;
};

module.exports = { createContact, getAllContacts, markAsRead };
