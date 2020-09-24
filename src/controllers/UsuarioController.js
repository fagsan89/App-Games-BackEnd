const UsuarioModel = require('../models/UsuarioModel')
const bcrypt = require('bcrypt')

class UsuarioController{ 

    async index(req, res){       
      
    }

    async create(req, res){
        
        const data = req.body
        data['password'] = await bcrypt.hash(data.password,8)
        data['role'] = 1

        const result = await UsuarioModel.cadastrarUsuario(data)
        
        if(result[0] !== undefined){
            res.status(200)
            res.json({msg:'Cadastro efetuado com sucesso!'})
        }else{
            res.status(400)
            res.json({error:'Erro ao cadastrar!'})
        }      
    }  

    async edit (req, res){
       
    }

    async delete (req, res){
       
    }

}

module.exports = new UsuarioController();