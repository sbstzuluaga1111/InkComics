const express = require('express')
const cors = require('cors')
const { dbConection } = require('../database/config.js')

class Server {

    constructor(){
        this.app = express()
        this.app.use(express.json())
        this.port = process.env.PORT
        
        this.paths = {
            auth: '/auth',
            search: '/search',
            users: '/users',
            comics: '/comics',
            libros:   '/libros',
            capComics:    '/capComics',
            capLibros:    '/capLibros',
        }

        this.conectDB()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth.routes.js')) 
        //this.app.use(this.paths.search, require('../routes/search.routes.js'))
        //this.app.use(this.paths.users, require('../routes/users.routes.js'))
        //this.app.use(this.paths.comics, require('../routes/comics.routes.js'))
        //this.app.use(this.paths.libros, require('../routes/libros.routes.js'))
        //this.app.use(this.paths.capComics, require('../routes/capComics.routes.js'))
        //this.app.use(this.paths.capLibros, require('../routes/capLibro.routes.js'))
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