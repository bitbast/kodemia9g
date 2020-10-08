
const express = require('express')

const app = express()

app.use(express.json()) //COnvierte el json de una peticion en un json siempre que tenga un content type. Hay que ponerlo al principio

const koders = [
    {
        id: 1,
        name: 'Mauro'
    },
    {
        id: 2,
        name: 'Axel'
    },
    {
        id: 3,
        name: 'Haro'
    }

]

app.get('/koders', (request, response) => {
    console.log('GET a koders')
    response.json({
        success: true,
        data: {
            koders: koders
        }
    }) 
})

app.post('/koders', (request, response) =>{
    console.log(request.body)
    response.json(request.body)
    koders.push(request.body)
}) 

app.listen(8080, () => { //termina de ponerse a escuchar
    console.log('Server is listening in port 8080')
})

/*
Práctica
    - Ocupar el json de la petición para agregar un nuevo koder al array de koders
    - Comprobar con get que el koder fue agregado
*/

