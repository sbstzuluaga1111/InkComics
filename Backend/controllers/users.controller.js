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

const deleteUsers = async (req, res)=>{

    const {id} = req.params

    const usuario = await Usuario.findByIdAndUpdate( id, { status: false } );

    res.json(usuario)
}

const putUsers = async (req, res)=>{

      const { id } = req.params;
      
      const { _id, password, fdp,description,email,...resto } = req.body;
  
      if ( password ) {
 
          const salt = bcryptjs.genSaltSync();
          resto.password = bcryptjs.hashSync( password, salt );
      }
      
      if ( fdp ) {
        resto.fdp = fdp;;
    }

    if ( description ) {
        resto.description = description;
    }
      
      const usuario = await Usuario.findByIdAndUpdate( id,resto , {new:true} );
  
      res.json({
          msg:"Usuario Actualizado",
          usuario : usuario
      });
      
  }

const getOneUser = (req,res) =>{

    try {
        const { id } = req.params;

        const userFind = Usuario.findOne({id})
    
        if(!userFind){
            return res.json({
                msg: "Usuario no encontrado"
            })
        }

        res.json({
           usuario: userFind
        })

    } catch (error) {
        console.log(error);
        res.json({
            error
        })
    }
}


module.exports = {
    getUsers,
    postUsers,
    deleteUsers,
    putUsers,
    getOneUser
}