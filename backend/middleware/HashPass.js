const bcrypt = require("bcryptjs")

exports.HashingThePassword = async (password) => {
    const round = 10;
    const hashingPass = await bcrypt.hash(password, round)
}

exports.comparingThePasswords = async (password, hashedPass) => {
    const originalPass = await bcrypt.compare(password, hashedPass)
}