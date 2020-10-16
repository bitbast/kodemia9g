const { request, response } = require('express')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

const tacosCollection = []

const Taco = mongoose.model('tacos', {
  type: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  isChido: {
    type: Boolean,
    required: false,
    default: true
  }
})

const dbUrl = 'mongodb+srv://kodemia123:1029Cine@kodemia-bootcamp.frxxh.mongodb.net/comida?retryWrites=true&w=majority'

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (error) {
    return console.error('DB ERROR:', error)
  }
  console.log('DB CONNECTED')

  Taco.find({ price: { $gte: 0 } }, (errorTaco, taco) => {
    if (errorTaco) {
      return console.error('ERROR TACO: ', errorTaco)
    }
    console.log('taco: ', taco)
    tacosCollection.push(taco)
  })
}
)

app.get('/tacos', (request, response) => {
  console.log('GET a tacosCollections')
  response.json({
    success: true,
    data: {
      tacos: tacosCollection
    }
  })
})

app.listen(8080, () => {
  console.log('Server is listening in port 8080')
})

//  Práctica: Ya que sabemos conectar la base de datos y obtener info
//  crear un endpoint GET que liste todos los tacos de la DB

// Pistas:
// *la definición del endpoint no necesariamente debe estar dentro del callback de la conexión
// *Lo único que va dentro del callback es el listen
