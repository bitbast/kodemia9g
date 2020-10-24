
const { request, response } = require('express')
const express = require('express')

const app = express()



app.use(express.json()) //No sirve para que la info que se solicita en los request , se vuelvan json, ya que vienen en string (aunue traen una estructura tipo json)

const tacos = [
  {
    id: 1,
    type: 'canasta',
    precio: 5
  },
  {
    id: 2,
    type: 'dorado',
    precio: 20
  },
  {
    id: 3,
    type: 'pastor',
    precio: 15
  },
  {
    id: 4,
    type: 'carnitas',
    precio: 18
  }
]

app.get('/', (request, response) => {
  console.log('GET METHOD')
  // response.write()   response.end()  response.combinados  response.send()   son métodos de response
  response.json({
    success: true,
    message: 'GET METHOD'
  })
})

app.get('/tacos', (request, response) => {
  response.json({
    success: true,
    message: 'GET All tacos',
    data: {
      tacos // igual a tacos: tacos
    }
  })
})

app.get('/tacos/:id', (request, response) => {
  const id = parseInt(request.params.id)
  const tacoFound = tacos.find(taco => taco.id === id) // El return regresa true o false. No es necesario poner "" ? true : false". También lo pasamos a una línea omitiendo los paréntesis en tacos (porque es sólo 1 parámetro) y las llaves a la función (porque es una línea). Tampoco se le pone return
  //  if (taco.id === id) {
  //    return true
  //  } else {
  //    return false
  //  }
  // 0 "" null undefined  son falsy. Su contraparte son Trudy
  if (!tacoFound) {
    response.status(404)
    response.json({
      success: false,
      message: 'Sorry ese! Taco not found'
    })
  } else {
    response.json({
      success: true,
      message: 'Here is your taco Ese!',
      data: {
        taco: tacoFound
      }
    })
  }
})

app.post('/tacos', (request, response) =>{
  request.body.
})

app.listen(8080, () => {
  console.log('Server is listening in port 8080')
})
