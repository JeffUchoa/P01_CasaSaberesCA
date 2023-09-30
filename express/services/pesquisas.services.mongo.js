const PesquisasModel = require("../models/pesquisas/pesquisas.model.mongo")


class PesquisasService {
    static list(request,response) {
        PesquisasModel.find()
        .then(
            (pesquisa) => {
                response.status(201).json(pesquisa)     
            }
        )
    }

    static register(request,response) {
        PesquisasModel.create(request.body)
        .then(
            (pesquisa) => {
                response.status(201).json(pesquisa)
            }
        )
    }

    static retrieve(request,response) {
        PesquisasModel.findById(request.params.id)
        .then(
            (pesquisa) => {
                response.status(201).json(pesquisa)
            }
        )
    }

    static update(request,response) {
        PesquisasModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (pesquisa) => {
                response.status(201).json(pesquisa)
            }
        )
    }

    static delete(request,response) {
        PesquisasModel.findByIdAndRemove(request.params.id)
        .then(
            (pesquisa) => {
                response.status(201).json(pesquisa)
            }
        )
    }
}
module.exports = PesquisasService