const UsuarioModel = require('../models/UsuarioModel')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const secret = process.env.APP_SECRET

//console.log(secret)

class AuthLoginController{ 


    async authentication(req, res){

        const { email, password } = req.body

        if(email !== undefined){

            const localizarUsuario = await UsuarioModel.localizarUsuario(email)

            if(localizarUsuario.length > 0){

                //verifica se as senhas são iguais, retorna true ou false
                const checkPassword = bcrypt.compare(password, localizarUsuario[0].password)

                if(await checkPassword && localizarUsuario[0].email === email){ 
                  
                    jwt.sign({nome:localizarUsuario[0].name, id:localizarUsuario[0].id, email: localizarUsuario[0].email}, secret, {expiresIn:'8h'}, (err, token) =>{

                        if(err){
                            res.status(400)
                            res.json({error: "Falha interna"})
                        }else{

                            
                            res.status(200)
                            res.json({
                                user:{
                                    id:localizarUsuario[0].id,
                                    name: localizarUsuario[0].name,
                                    email:localizarUsuario[0].email
                                },
                                
                                token: token
                            })
                        }
                    })
                }else{
                    res.status(401)
                    res.json({error : "Credênciais inválidas !!"})  
                }
               
            }else{
                res.status(404)
                res.json({error : "O e-mail não existe na base de dados !!"})
            }
           
        }else{
            res.status(400)
            res.json({error : "O e-mail é invalido!!"})
        }

       
      
      
    }

  
}

module.exports = new AuthLoginController();