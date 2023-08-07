const Usuario = require('../models/usuario.js')
const bcryptjs = require('bcryptjs')


const getU = (req,res) =>{
    res.json({"message":"GET API"})
}

const postU = async (req,res) =>{

    const {Nombre,Email,Password,Rol} = req.body
    const usuario = new Usuario({Nombre,Email,Password,Rol})

    ///Verificar si el correo ya existe
    const existeEmail = await Usuario.findOne({Email})
    if(existeEmail){
        return res.status(400).json({
            msg:"Email is already registered"
        })
    }

    //Encriptar nuestra contraseña
    const salt = bcryptjs.genSaltSync()
    usuario.Password = bcryptjs.hashSync(Password,salt)


    await usuario.save()
    res.json({"message":"POST API", usuario})
}

const deleteU = (req,res) =>{
    res.json({"message":"DELETE API"})
}

const patchU =  (req,res) =>{
    res.json({"message":"PATCH API"})
}

const getOneU = (req,res) =>{
    res.json({"message":"GET ONE API"})
}

const putU = (req,res) =>{
    res.json({"message":"PUT API"})
}

module.exports = {
    homepageU,
    getOneU,
    getU,
    postU,
    deleteU,
    patchU,
    putU
}