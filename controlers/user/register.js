const bcrypt = require("bcryptjs")
const HttpError = require("../../Helpers/HttpError");
const User = require("../../models/user-model")

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email})

    if (user) {
        throw HttpError(409, "Email in use")
    }
    
    const hashPassword = await bcrypt.hash(password, 1);

    const result = await User.create({ ...req.body, password: hashPassword })
    
    res.status(201).json({
        user: {
            email: result.email,
            subscription: "starter"
        }
    })
};

module.exports = register;