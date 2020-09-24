const conn = require('../database/dbconfig')


class UsuarioModel {
    
    async localizarUsuario(email){

        const qry = conn('usuario')
        .select('*')
        .where("email",email)   
        
        //console.log(qry.toString())
        
        return await qry
        .then(res => res)
        .catch(err => err)
       
      
    }

    async cadastrarUsuario(data){

        const qry = conn('usuario')
        .insert(data)
        .returning("*")   
        
        //console.log(qry.toString())
        
        return await qry
        .then(res => res)
        .catch(err => err)
       
      
    }
}


module.exports = new UsuarioModel()