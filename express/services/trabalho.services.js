const TrabalhoModel = require("../models/trabalho/trabalho.model")

let trabalhos = [
    // { id: 1, titulo: 'Publicação 1', descricao:'aaa', publico: true },
    // { id: 2, titulo: 'Publicação 2', descricao:'aaa', publico: true },
    // { id: 3, titulo: 'Publicação 3', descricao:'aaa', publico: true },
    // { id: 4, titulo: 'Publicação 4', descricao:'aaa', publico: true },
    // { id: 5, titulo: 'Publicação 5', descricao:'aaa', publico: true },
    // { id: 6, titulo: 'Publicação 6', descricao:'aaa', publico: true },
    // { id: 7, titulo: 'Publicação 7', descricao:'aaa', publico: true },
    // { id: 8, titulo: 'Publicação 8', descricao:'aaa', publico: true },
    // { id: 9, titulo: 'Publicação 9', descricao:'aaa', publico: true },
    // { id: 10, titulo: 'Publicação 10', descricao:'aaa', publico: true },
    // { id: 11, titulo: 'Publicação 10', descricao:'aaa', publico: true },
    // { id: 12, titulo: 'Publicação 10', descricao:'aaa', publico: true }
]

let id = 5

class TrabalhoService{

    static list() {
        return trabalhos
    }

    static register(data) {
        let trabalho = new TrabalhoModel(
            id++,
            data.titulo,
            data.descricao,
            data.publico,
        )
        trabalhos.push(trabalho)
        return trabalhos
    }

    static delete(id) {
        for (let i = 0; i < trabalhos.length; i++) {
            if (trabalhos[i].id == id) {
                trabalhos.splice(i, 1);
                return true;
            }
        }
        return false
    }

}

module.exports = TrabalhoService