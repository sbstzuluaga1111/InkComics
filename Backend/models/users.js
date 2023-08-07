const {Schema, model, models} = require('mongoose')

const usuariosShema = Schema({
    username: {
        type:String,
        required:[true,'name is required'],
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    description:{
        type:String,
    },
    fdp:{
        type:String,
    },
    rol:{
        type: Schema.Types.ObjectId,
        ref: 'roles',
        required: true,
        default: 'USER',
    },
    status:{
        type:Boolean,
        default:true,
    },
    monedas:{
        type:Number,
    },
    subs:{
        type: Schema.Types.ObjectId,
        ref: 'subscripciones',
        required: true,
        default:"NONE"
    },
    seguidosComics:{
        type:Array,
    },
    seguidosLibros:{
        type:Array,
    },
    seguidosCretator:{
        type:Array,
    },
    seguidores:{
        type:Number,
        default:0
    },
    portfolio:{
        type:Array,
    }
})

module.exports = model("users", usuariosShema)