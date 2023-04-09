const express = require("express");

const ctrl = require("../../controlers/contacts");

const { validateBody } = require('../../utils');

const addSchema = require('../../schemas/contactsSchema')

const router = express.Router();


router.get("/", ctrl.getContacts);

router.get("/:contactId", ctrl.getContactById);

router.post("/", ctrl.addContactCC);

router.delete("/:contactId", ctrl.deleteContactById);

router.put("/:contactId", ctrl.updateContactById);

router.patch("/:contactId/favorite", ctrl.updateStatusContact)

module.exports = router;
