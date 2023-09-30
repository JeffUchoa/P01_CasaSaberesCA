const EventoModel = require ("../models/evento.model")

let eventos = [
    { id: 1, title: 'Dia da marmota', date: '2023-06-23', descricao: 'Um dia super legalzinho :)', horario: '12:00' },
    { id: 2, title: 'Dia do coiso', date: '2023-06-06', descricao: 'Cuidado com o coiso', horario: '12:00' },
]

let id = 2

class EventoService{

    static list() {
        return eventos
    }

    static register(data) {
        let evento = new EventoModel(
            id++,
            data.nomeEvento,
            data.novoeventodia,
            data.descricaoEvento,
            data.horarioEvento,
        )
        eventos.push(evento)
        return eventos
    }

    static delete(id) {
        for (let i = 0; i < eventos.length; i++) {
            if (eventos[i].id == id) {
                eventos.splice(i, 1);
                return true;
            }
        }
        return false
    }

}

module.exports = EventoService