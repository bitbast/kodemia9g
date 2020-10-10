const express = require('express')
const app = express()
app.use(express.json())
let koders = [
  {
    id: 1,
    name: 'Mauro'
  }, {
    id: 2,
    name: 'Axel'
  }, {
    id: 3,
    name: 'Haro'
  }
]
app.get('/koders', (request, response) => {
  console.log('get a koders')
  response.json({
    success: true,
    data: {
      koders: koders
    }
  })
})
// GET /koders/1 -> id = 1
// GET /kdoers/4 -> id = 4
// GET /koders/123 -> id = 123
app.get('/koders/:id', (request, response) => {
  const id = request.params.id
  const koderFound = koders.find((koder) => {
    return koder.id === parseInt(id)
  })
  if (koderFound) {
    response.json({
      success: true,
      data: {
        koder: koderFound
      }
    })
  } else {
    response.status(404)
    response.json({
      success: false,
      message: 'koder not found'
    })
  }
})
app.post('/koders', (request, response) => {
  console.log(request.body)
  request.body.koders.forEach((koder, index) => {
    const newKoder = {
      id: koders.length + 1,
      name: koder.name
    }
    koders.push(newKoder)
  })
})
app.patch('/koders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  koders = koders.map((koder) => {
    if (koder.id === id) {
      koder.name = request.body.name
    }
    return koder
  })
  response.json({
    success: true,
    message: 'Koder actualizado',
    data: {
      koders
    }
  })
})
app.delete('/koders/:id', (request, response) => {
  const id = parseInt(request.params.id)
  koders = koders.filter((koder) => {
    return koder.id !== id
  })
  response.json({
    success: true,
    message: 'koder deleted',
    data: {
      koders
    }
  })
})
app.listen(8080, () => { // termina de ponerse a escuchar
  console.log('Server is listening in port 8080')
})

/*
Crear otro proyecto para hacer un API de cervezas CRUD
Post/Chelas
GET/chelas
GET/Chelas/:id
PATCH/chelas/:id
DELETE /chelas/:id
{
    id: 'abc123',
    marca: 'corona',
    tipo: 'pilsner',
    precio: 30
}
*/
