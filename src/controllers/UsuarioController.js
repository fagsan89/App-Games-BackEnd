const UsuarioModel = require('../models/UsuarioModel')

class UsuarioController{ 

    async index(req, res){

       
      
    }

    async create(req, res){

       res.json(req.loggedUser)

       req.loggedUser
      
    }

    

    async delete (req, res){
       
    }

}

module.exports = new UsuarioController();