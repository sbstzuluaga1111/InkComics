const {Schema, model, models} = require('mongoose')

const comicsShema = Schema({
    titulo: {
        type:String,
        required:[true,'name is required'],
    },
    autor:{
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true,
    },
    sinopsis:{
        type:String,
        required:[true,'Sinopsis is required'],
    },
    imgLogo:{
        type:String,
        required:true
    },
    imgBanner:{
        type:String,
        required:true
    },
    fechaPub:{
        type:Date,
        default: Date.now(),
    },
    estado:{
        type: Schema.Types.ObjectId,
        ref: 'estados',
        required: true,
    },
    estatus:{
        type:Boolean,
        default: true,
        required: true
    }
})

module.exports = model("comics", comicsShema)