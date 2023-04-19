const express = require("express");

const { validateBody } = require('../../utils');

const authSchema = require('../../schemas/authSchema');
const ctrl = require("../../controlers/user");
const { authenticate, subscriptionMiddware } = require("../../middlewares");

const router = express.Router();

router.post("/register", validateBody(authSchema), ctrl.register);

router.post("/login", validateBody(authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);

router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, subscriptionMiddware, ctrl.patchSubscription)

module.exports = router;