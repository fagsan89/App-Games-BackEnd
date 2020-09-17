const UsuarioController = require("../controllers/UsuarioController");

module.exports = app => {
    app.get('/usuario/listar', UsuarioController.index);
    app.post('/usuario/cadastrar', UsuarioController.create);
    app.delete('/usuario/excluir', UsuarioController.delete);
}


