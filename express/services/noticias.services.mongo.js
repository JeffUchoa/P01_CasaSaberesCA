const NoticiasModel = require("../models/noticias/noticias.model.mongo")


class NoticiasService {
    static list(request,response) {
        NoticiasModel.find()
        .then(
            (noticia) => {
                response.status(201).json(noticia)     
            }
        )
    }

    static register(request,response) {
        NoticiasModel.create(request.body)
        .then(
            (noticia) => {
                response.status(201).json(noticia)
            }
        )
    }

    static retrieve(request,response) {
        NoticiasModel.findById(request.params.id)
        .then(
            (noticia) => {
                response.status(201).json(noticia)
            }
        )
    }

    static update(request,response) {
        NoticiasModel.findByIdAndUpdate(
                    request.params.id,
                    request.body,
                    {new:true})
        .then(
            (noticia) => {
                response.status(201).json(noticia)
            }
        )
    }

    static delete(request,response) {
        NoticiasModel.findByIdAndRemove(request.params.id)
        .then(
            (noticia) => {
                response.status(201).json(noticia)
            }
        )
    }
}
module.exports = NoticiasService