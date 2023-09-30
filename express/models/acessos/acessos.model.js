var mongoose = require("mongoose")

var LoginSchema = mongoose.Schema(
    {
        numero:{type:Number,required:true},
    }
)

var LoginModel = mongoose.model("acessos",LoginSchema)
module.exports = LoginModel