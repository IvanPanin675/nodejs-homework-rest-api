const express = require("express");

const { getContacts, getContactById, addContactCC, deleteContactById, updateContactById, updateStatusContact } = require("../../controlers/contacts-controlers");

const { validateBody } = require('../../utils');

const addSchema = require('../../schemas/contactsSchema')

const router = express.Router();


router.get("/", getContacts);

router.get("/:contactId", getContactById);

router.post("/", addContactCC);

router.delete("/:contactId", deleteContactById);

router.put("/:contactId", updateContactById);

router.patch("/:contactId/favorite", updateStatusContact)

module.exports = router;
