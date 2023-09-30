var mongoose = require("mongoose")

var NoticiasSchema = mongoose.Schema(
    {
        name:{type:String,required:true},
        link:{type:String,required:false},
        image:{type:String,required:true},
    }
)

var NoticiasModel = mongoose.model("noticias",NoticiasSchema)
module.exports = NoticiasModel