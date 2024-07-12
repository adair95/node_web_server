import  express  from "express";
import  path  from "path";

//const express = require('express')
//const path = require('path') //leer las carpetas de la raiz

export const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express()

    //Para poder usar middlewares se usa la palabra use que es propio de express
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible para mostrar

    app.get('*', (req, res) => { //req = peticion, res = respuesta a esa peticion
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    
    app.listen(port, () => {
        console.log(`Escuchando por el puerto ${port}`)
    })
}



// module.exports = {
//     startServer
// }