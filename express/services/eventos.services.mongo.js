const EventosModel = require("../models/eventos/evento.model.mongo")

class EventosService {
    static list(request,response) {
        EventosModel.find()
        .then(
            (evento) => {
                response.status(201).json(evento)     
            }
        )
    }

    static register(request,response) {
        EventosModel.create(request.body)
        .then(
            (eventos) => {
                response.status(201).json(eventos)
            }
        )
    }

    static retrieve(request,response) {
        EventosModel.findById(request.params.id)
        .then(
            (eventos) => {
                response.status(201).json(eventos)
            }
        )
    }

    static update(request,response) {
        EventosModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (eventos) => {
                response.status(201).json(eventos)
            }
        )
    }

    static delete(request,response) {
        EventosModel.findByIdAndRemove(request.params.id)
        .then(
            (eventos) => {
                response.status(201).json(eventos)
            }
        )
    }
}
module.exports = EventosService