const { request, response } = require('express')
const express = require('express')

const app = express()

app.use(express.json())

const port = 8080

const beers = [
    {
        id: 'abc123',
        marca: 'corona',
        tipo: 'pilsner',
        precio: 30
    },
    {
        id: 'abc124',
        marca: 'Heineken',
        tipo: 'lager',
        precio: 22
    },
    {
        id: 'abc125',
        marca: 'Bohemia',
        tipo: 'viena',
        precio: 25
    },
    {
        id: 'abc126',
        marca: 'Paulaner',
        tipo: 'lager',
        precio: 50
    }
]

app.get('/beers', (request, response) =>{
    response.json({
        succes: true,
        data: {
            beers: beers
        }
    })
})

app.post('/beers', (request, response) =>{
    beers.push(request.body)
    response.json({
        succes: true,
        data: {
            beers: beers
        }
    })
})


app.listen(port, () => {
    console.log('Server is listening in port 8080')
})