var mongoose = require("mongoose")

var LoginSchema = mongoose.Schema(
    {
        nome:{type:String,required:true},
        email:{type:String,required:true},
        senha:{type:String,required:true},
        fone:{type:String,required:false},
        tipo:{type:String,required:true}
    }
)

var LoginModel = mongoose.model("usuarios",LoginSchema)
module.exports = LoginModel