const GamesController = require("../controllers/GamesController");

module.exports = app => {
    app.get('/games/listar/:limite/:offset', GamesController.index);
    app.post('/games/cadastrar', GamesController.create);
    app.put('/games/editar/:id', GamesController.edit);
    app.delete('/games/excluir/:id', GamesController.delete);
}


