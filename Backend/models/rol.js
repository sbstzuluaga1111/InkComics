const {Schema,model} = require('mongoose')

const RoleShema = Schema({
    rol:{
        type:String,
        required:[true, 'El rol es obligatorio']
    }
})

const EstadosShema = Schema({
    estado:{
        type:String,
        required:[true, 'El estado es obligatorio']
    }
})

const subscripcionesShema = Schema({
    nombre:{
        type:String,
        required:[true, 'El rol es obligatorio']
    },
    especificacion:{
        type:String,
        required:[true, 'El rol es obligatorio']
    },
    precio:{
        type:String,
        required:[true, 'El rol es obligatorio']
    }
})

const modelRol = model('roles',RoleShema),
modelEstados = model('roles',EstadosShema),
modelSubscription = model('roles',subscripcionesShema)

module.exports = {
    modelRol,
    modelEstados,
    modelSubscription
}