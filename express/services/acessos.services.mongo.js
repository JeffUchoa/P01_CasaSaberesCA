const EventosModel = require("../models/acessos/acessos.model")

class AcessoService {
    static list(request,response) {
        EventosModel.find()
        .then(
            (evento) => {
                response.status(201).json(evento)     
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
        .catch((error) => {
            // Trate o erro aqui
            response.status(500).json({ error: 'Ocorreu um erro na atualização' });
        });
    }
}
module.exports = AcessoService