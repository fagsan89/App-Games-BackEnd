const mongoose = require('mongoose')
require('../models/ClienteModel')
const Cliente = mongoose.model('deliveries')


class ClienteController{ 

    async index(req, res){

        await Cliente.find().then((clientes)=>{
           
            //Total de Peso
            let calctp = ''
            clientes.map(item => (calctp = parseInt(calctp + item.peso)))

            //Calculo da Media
            let calcm = parseInt(calctp/clientes.length)

            res.status(200)
            res.json({clientes : clientes, total_clientes:clientes.length, total_peso :calctp, media:calcm })
            return
        })
        .catch((err) => {
            res.status(400)
            res.json({status: false, message:'Erro ao listar Clientes' + err})
            return
        })
    }

    async create(req, res){

        const erros=[]
        const {
            nome,
            peso,
            endereco,
            geolocalizacao
           
        } = req.body

        const novoCliente = {
            nome,
            peso,
            endereco,
            geolocalizacao
        }

       

       if(!nome){

            erros.push({error:'Campo NOME Obrigatorio'})
                   
       }else if(!peso){

            erros.push({error:'Campo PESO Obrigatorio'})
         
       }
    

       if(erros.length > 0){

        res.status(400)
        res.json(erros)

       }else{        

           await new Cliente(novoCliente).save()
           .then(()=>{
               res.status(200)
               res.json({status: true, message:'Cadastro efetuado com sucesso'})
               return
           }).catch((err) =>{
               res.status(400)
               res.json({status: false, message:'Erro ao salvar Cliente' + err})
               return
           })
       }
      
    }

    async delete (req, res){
        Cliente.deleteMany({})
        .then(()=>{
            res.status(200)
            res.json({status: true, message:'Excluido com sucesso'})
            return
        })
        .catch((err)=>{
            res.status(400)
            res.json({status: false, message:'Erro ao excluir cliente'})
            return
        })
    }

}

module.exports = new ClienteController();