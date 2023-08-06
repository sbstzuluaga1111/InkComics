const express = require('express')
const cors = require('cors')
const { dbConection } = require('../database/config.js')

class Server {

    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.port = process.env.PORT
        
        this.authPath = "/api/auth"
        this.usuariosPath = '/api/usuarios'

        this.conectDB()
        //Middlewares
        this.middlewares()
        //Routes
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth.routes.js')) 
        this.app.use(this.usuariosPath, require('../routes/usuario.routes.js'))
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT ${this.port}`);
        })
    }

    async conectDB(){
        await dbConection();
    }
}

module.exports = Server