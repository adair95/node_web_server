const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = 'public' } = options
    
    const app = express()

    //Para poder usar niddlewares se usa la palabra use que es propio de express
    app.use(express.static(public_path)) //contenido estatico que ponemos disponible para mostrar

    app.get('*', (req, res) => { //req = peticion, res = respuesta a esa peticion
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    
    app.listen(port, () => {
        console.log(`Escuchando por el puerto ${port}`)
    })
}

module.exports = {
    startServer
}