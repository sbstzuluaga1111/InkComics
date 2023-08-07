const Usuario = require('../models/users.js')
const bcryptjs = require('bcryptjs')


const getUsers = async(req, res)=>{
    const { init, fin} = req.query;
    const query = { estado: true };

    const [ total, usuarios ] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(init))
            .limit(Number(fin))
    ]);

    res.json({
        total,
        usuarios
    });
}

const postUsers = async (req,res) =>{

    const {username,email,password} = req.body
    const usuario = new Usuario({username,email,password})

    const existeEmail = await Usuario.findOne({email})
    if(existeEmail){
        return res.status(400).json({
            msg:"Email ya esat registrado"
        })
    }

    const salt = bcryptjs.genSaltSync()
    usuario.password = bcryptjs.hashSync(password,salt)

    await usuario.save()
    res.json({msg:"Usuario Agregado con exito", usuario})
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
    getOneU,
    getU,
    postU,
    deleteU,
    patchU,
    putU
}