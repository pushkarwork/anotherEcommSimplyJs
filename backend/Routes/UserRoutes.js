const express = require("express");
const { register } = require("../Controllers/UserControllers");
const route = express.Router()


route.get("/", register)

module.exports = route;