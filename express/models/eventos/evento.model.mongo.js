var mongoose = require("mongoose")

var EventoSchema = mongoose.Schema(
    {
        title:{type:String,required:true},
        date:{type:String,required:true},
        descricao:{type:String,required:true},
        horario:{type:String,required:true}
    }
)

var EventoModel = mongoose.model("eventos",EventoSchema)
module.exports = EventoModel