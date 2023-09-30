const TrabalhosModel = require("../models/trabalho/trabalho.model.mongo")

class TrabalhosService {
    static list(request,response) {
        TrabalhosModel.find()
        .then(
            (trabalho) => {
                response.status(201).json(trabalho)     
            }
        )
    }

    static register(request,response) {
        TrabalhosModel.create(request.body)
        .then(
            (trabalho) => {
                response.status(201).json(trabalho)
            }
        )
    }

    static retrieve(request,response) {
        TrabalhosModel.findById(request.params.id)
        .then(
            (trabalho) => {
                response.status(201).json(trabalho)
            }
        )
    }

    static update(request,response) {
        TrabalhosModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (trabalho) => {
                response.status(201).json(trabalho)
            }
        )
    }

    static delete(request,response) {
        TrabalhosModel.findByIdAndRemove(request.params.id)
        .then(
            (trabalho) => {
                response.status(201).json(trabalho)
            }
        )
    }
}
module.exports = TrabalhosService