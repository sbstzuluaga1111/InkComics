const roles = require ('../models/rol.js');
const Usuario = require('../models/users.js');

const isValidRol = async(rol= '')=>{
    const existeRol = await roles.findOne({rol});
    if(!existeRol){
            throw new Error(`El rol ${rol} no esta registrado en la base de datos`);
    }
}

 const emailExiste = async( email = '' ) => {
    const existeEmail = await Usuario.findOne({email});
    if(existeEmail){
        throw new Error(`El email: ${ email }, ya está registrado`);
    }
 }

 const userExistsById = async( id ) => {
    const userExists = await Usuario.findById(id);
    if ( !userExists ) {
        throw new Error(`El id (usuario) no existe ${ id }`);
    }
}



module.exports = {
    isValidRol,
    emailExiste,
    userExistsById
}