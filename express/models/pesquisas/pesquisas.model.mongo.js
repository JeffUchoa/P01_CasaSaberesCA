var mongoose = require("mongoose")

var PesquisasSchema = mongoose.Schema(
    {
        titulo:{type:String,required:true},
        descricao:{type:String,required:false},
        link:{type:String,required:true},
    }
)

var PesquisasModel = mongoose.model("pesquisas",PesquisasSchema)
module.exports = PesquisasModel