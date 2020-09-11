const mongoose = require('mongoose');

//Configurações Db
mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost:27017/routeasydb',{
    useUnifiedTopology: true,
    useNewUrlParser: true 
}).then(()=>{
  console.log('Conectado ao mongo')
}).catch((err) => {
  console.log('Erro ao se conectar ' + err)
})

module.exports = mongoose