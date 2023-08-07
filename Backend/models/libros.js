const {Schema, model, models} = require('mongoose')

const librosShema = Schema({
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
    capitulos:{
        type:Array,
    },
})

module.exports = model("libros", librosShema)