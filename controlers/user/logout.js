const User = require("../../models/user-model");

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, {token:""})

  res.status(204).json({
    message: "No Content"
  });

};

module.exports = logout;