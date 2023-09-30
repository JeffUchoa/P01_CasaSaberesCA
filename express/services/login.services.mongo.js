const LoginModel = require("../models/login/login.model.mongo")


class LoginService {
    static list(request,response) {
        LoginModel.find()
        .then(
            (login) => {
                response.status(201).json(login)     
            }
        )
    }

    static register(request,response) {
        LoginModel.create(request.body)
        .then(
            (login) => {
                response.status(201).json(login)
            }
        )
    }

    static retrieve(request,response) {
        LoginModel.findById(request.params.id)
        .then(
            (login) => {
                response.status(201).json(login)
            }
        )
    }

    static update(request,response) {
        LoginModel.findByIdAndUpdate(
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
        LoginModel.findByIdAndRemove(request.params.id)
        .then(
            (login) => {
                response.status(201).json(login)
            }
        )
    }
}
module.exports = LoginService