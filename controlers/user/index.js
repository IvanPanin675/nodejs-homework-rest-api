const ctrlWrapper = require("../../utils/ctrlWrapper");
const current = require("./current");
const login = require("./login");
const logout = require("./logout");
const patchSubscription = require("./patchSubscription");
const register = require("./register");
const updateAvatar = require("./updateAvatar");



module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  current: ctrlWrapper(current),
  logout: ctrlWrapper(logout),
  patchSubscription: ctrlWrapper(patchSubscription),
  updateAvatar: ctrlWrapper(updateAvatar)
};
