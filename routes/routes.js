var express = require("express")
var router = express.Router();
var ClienteController = require("../controllers/ClienteController");

router.get('/listar', ClienteController.index);
router.post('/cadastrar', ClienteController.create);
router.delete('/excluir', ClienteController.delete);

module.exports = router;