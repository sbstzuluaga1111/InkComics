const {response} = require('express');
const Usuario = require('../models/users.js');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generateJWT.js');



const login = async (req, res=response)=>{

    const {email, password} = req.body;
    try {

        const usuario = await Usuario.findOne({email});

        if (!usuario){
            return res.status(404).json({
                msg:"Usuario no encontrado"
            })
        }

        if (!usuario.estado){
            return res.status(400).json({
                msg:"Usuario no está activo"
            })
        }

        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword){
            return res.status(400).json({
                msg:"Contraseña incorrecta"
            })
        }

        const token = await generateJWT(usuario.id)

        res.json({
           usuario,
           token
        })
        
    } catch (error) {
        console.log(error);
        return res.json({
            msg:"Hubo un error"
        })
    }
}

module.exports = {
    login
}