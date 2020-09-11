const mongoose = require('../database/connection')
const Schema = mongoose.Schema

const ClienteSchema = new Schema({

    nome:{
        type:String,
        require:true
    },

    peso:{
        type:Number,
        require: true
    },

    endereco:{

        logradouro:{
            type:String,
            require: true
        },

        numero:{
            type:Number,
            require: true
        },
        
        bairro:{
            type:String,
            require: true
        },

        cidade:{
            type:String,
            require: true
        },

        estado:{
            type:String,
            require: true
        },
        
        pais:{
            type:String,
            require: true
        }
    },

    geolocalizacao:{
        longitude:{
            type:String,
            require: true
        },
    
        latitude:{
            type:String,
            require: true
        },
    },    
  
    data_criadoEm:{
        type: Date,
        default: Date.now()
    }
})

mongoose.model('deliveries', ClienteSchema)

