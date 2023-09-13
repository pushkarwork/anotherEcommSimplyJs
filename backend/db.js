const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/simplyjs").then(() => {
    console.log("connected the db")

}).catch((e) => {
    console.log(e)
})

