const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const cors =  require('cors')
const router = require("./routes/routes")

 
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//Rotas 
app.use("/",router);

module.exports = app