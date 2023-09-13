const userModel = require("../Models/UserModels")
const { HashingThePassword, comparingThePasswords } = require("../middleware/HashPass")

exports.register = async (req, res) => {
    const { name, email, password, secretanswer, address } = req.body
    try {
        if (!name || !email || !password || !secretanswer || !address) {
            res.status(400).json({ message: "Please fill all the Fields" })
        }
        const userExist = await userModel.findOne({ email })
        if (!userExist) {
            // const HashedPassword = HashingThePassword(password)
            // password = HashedPassword
            const newUser = new userModel({ name, email, password, secretanswer, address })

            const user = await newUser.save()
            return res.status(200).json({
                success: true,
                user
            })
        }
        res.status(200).json({ message: "User Already Exist" })

    } catch (error) {
        res.status(400).json({ message: "User Registration failed", error })
    }
}
