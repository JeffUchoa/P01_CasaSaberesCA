var mongoose = require("mongoose")

var TrabalhoSchema = mongoose.Schema(
    {
        titulo:{type:String,required:true},
        descricao:{type:String,required:false},
        publico:{type:Boolean,required:true},
        linkPdf:{type:String,required:true},
        linkImage:{type:String,required:true},
    }
)



var TrabalhoModel = mongoose.model("trabalhos",TrabalhoSchema)
module.exports = TrabalhoModel