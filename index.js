
require('dotenv').config()
const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const cors =  require('cors')
const consign = require("consign")

const noAuthorization = [
    '/auth',
    '/usuario/cadastrar'
]

 
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Middleware para autenticar usuario
app.use((req, res, next) => require('./src/middleware/authMiddleware').auth(req, res, next, noAuthorization))

consign().include('src/routes').into(app)

module.exports = app