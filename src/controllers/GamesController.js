const GamesModel = require('../models/GamesModel')

class GamesController{ 

    async index(req, res){   
    
      const limite = req.params.limite
      const offset = req.params.offset

      const result = await GamesModel.listarGames(Number (limite),Number (offset))

       
        if(result !== undefined || result !== null || result !== ''){
            res.status(200)
            res.json(result)
        }else{
            res.status(400)
            res.json({error:'Erro ao listar!'})
        }
    }

    async create(req, res){
       
        const data = req.body
        data['criado_em'] = new Date()

        const result = await GamesModel.cadastrarGame(data)

        if(result[0] !== undefined){
            res.status(200)
            res.json({msg:'Cadastro efetuado com sucesso!'})
        }else{
            res.status(400)
            res.json({error:'Erro ao cadastrar!'})
        }
        
    }

    async edit (req, res){
       
        const game = req.params.id
        const {descricao} = req.body

        const data = {
            descricao,
            atualizado_em: new Date()
        }

        if(descricao !== undefined){
            const result = await GamesModel.atualizarGame(game,data)

            if(result[0] !== undefined){
                res.status(200)
                res.json({msg:'Atualizado com sucesso!'})
            }else{
                res.status(400)
                res.json({error:'Erro ao atualizar!'})
            }
            
        }else{
            res.status(400)
            res.json({error:'Campo descricao esta vazio!'})
        }
       

    }

    async delete (req, res){
       
        const game = req.params.id

        const result = await GamesModel.excluirGames(game)

        if(result[0] !== undefined){
            res.status(200)
            res.json({msg:'Excluido com sucesso!'})
        }else{
            res.status(400)
            res.json({error:'Erro ao Excluir!'})
        }
    }

}

module.exports = new GamesController();