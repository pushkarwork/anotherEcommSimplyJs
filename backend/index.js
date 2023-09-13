const express = require("express");
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
require("./db")


const UserRoutes = require("./Routes/UserRoutes")
app.use(express.json())
app.use(UserRoutes)


app.get("/", (req, res) => {
    res.send("hi")
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})