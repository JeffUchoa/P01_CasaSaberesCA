const LoginModel = require ("../models/login/login.model")

let usuarios = [
    // { id: 1, nome: 'Michelle', email: 'michele.casa@gmail.com', senha: '12345678', tipo: 'adm'},
    // { id: 2, nome: 'Michael', email: 'michael.casa@gmail.co', senha: '12345678', tipo: 'usuario'},
]

let adm = false;

function admChange(){
    adm = !adm
    return adm
}

let id = 2

class LoginService{

    static adm(){
        return adm
    }

    static list() {
        return usuarios
    }

    static admChange(){
        admChange()
        return adm
    }

    static register(data) {
        let evento = new LoginModel(
            id++,
            data.nome,
            data.email,
            data.senha,
            data.tipo
        )
        usuarios.push(evento)
        return usuarios
    }

    static delete(id) {
        for (let i = 0; i < usuarios.length; i++) {
            if (usuarios[i].id == id) {
                usuarios.splice(i, 1);
                return true;
            }
        }
        return false
    }

}

module.exports = LoginService