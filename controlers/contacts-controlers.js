const HttpError = require("../Helpers/HttpError");

const Contact = require("../models/contacts-model");

const ctrlWrapper = require("../utils/ctrlWrapper");

const getContacts = async (req, res, next) => {
  const result = await Contact.find();
  if (!result) {
    throw HttpError(400);
  }
  res.json(result);
};

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findOne({ _id: contactId });
  if (!result) {
    throw HttpError(404, `Contact id:${contactId} not found`);
  }
  res.json(result);
};

const addContactCC = async (req, res, next) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  if (!result) {
    return res.status(404).json({
      message: `Contact with id:${contactId} not found`,
    });
  }
  res.status(200).json({
    message: `contact deleted`,
  });
};

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {new:true});
  if (!result) {
    return res.status(404).json({
      message: `Contact with id:${contactId} not found`,
    });
  }
  res.json(result);
};

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {new:true});
  if (!result) {
    return res.status(404).json({
      message: `Contact with id:${contactId} not found`,
    });
  }
  res.json(result);
}

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  addContactCC: ctrlWrapper(addContactCC),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
