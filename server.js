const app = require('./index')

module.exports = app.listen(4000,() => {
    console.log("Servidor rodando")
});
