const HttpError = require("../../Helpers/HttpError");

const Contact = require("../../models/contacts-model");

const getContacts = async (req, res, next) => {
  const result = await Contact.find();
  if (!result) {
    throw HttpError(400);
  }
  res.json(result);
};

module.exports = {
  getContacts,
};