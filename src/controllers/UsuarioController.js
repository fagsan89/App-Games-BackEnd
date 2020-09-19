const UsuarioModel = require('../models/UsuarioModel')

class UsuarioController{ 

    async index(req, res){

       
      
    }

    async create(req, res){

       //res.json(req.loggedUser)
    
       console.log('CHEGUEI AUTENTICADO')
       
      
    }

    

    async delete (req, res){
       
    }

}

module.exports = new UsuarioController();