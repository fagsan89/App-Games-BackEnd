const { groupBy } = require('../database/dbconfig')
const conn = require('../database/dbconfig')


class GamesModel {

    async listarGames(limite, offset){      

        let model =  conn('games')
        let totalCount = await model.clone().count()
        let data = await model.clone().offset(offset).limit(limite)
        .select('*')
        .orderBy('descricao','id')           

        return {
            totalCount: totalCount[0]['count'],
            data: data
        }
             
      
    }
    
    async cadastrarGame(data){

        const qry = conn('games')
        .insert(data)
        .returning("*")   
        
        //console.log(qry.toString())
        
        return await qry
        .then(res => res)
        .catch(err => err)
       
      
    }
    
    async atualizarGame(game,data){

        const qry = conn('games')
        .update(data)
        .where("id",game)   
        .returning('*')
        //console.log(qry.toString())
        
        return await qry
        .then(res => res)
        .catch(err => err)
       
      
    }

    async excluirGames(game){

        const qry = conn('games')
        .delete()
        .where("id",game)   
        .returning('*')
        //console.log(qry.toString())
        
        return await qry
        .then(res => res)
        .catch(err => err)
       
      
    }
}


module.exports = new GamesModel()