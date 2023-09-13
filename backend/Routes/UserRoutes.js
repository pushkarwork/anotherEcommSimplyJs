const express = require("express");
const { register } = require("../Controllers/UserControllers");
const route = express.Router()


route.post("/register", register)

module.exports = route;