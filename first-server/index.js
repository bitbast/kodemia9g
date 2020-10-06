const http = require('http')

const server = http.createServer((request, response)=>{
    console.log('Petición entrante---- ' + request.url)
    console.log('Method: ', request.method)


    if (request.url === "/hola") {
        if (request.method === "GET"){
            response.write('hola koder, estas intentando obtener')
        } else if (request.method ==="POST"){
            response.write('hola koder, estás intentando crear')
        }
    } else if (request.url == "/adios"){
        if (request.method === "GET"){
            response.write('hasta la vista baby con un GET')
        } else if (request.method ==="POST"){
            response.write('hasta la vista baby con un post')
    } else {
      response.write('Hola desde Node')
    }
}
    response.end()
})

server.listen(8080, () => {
  console.log('El servidor está escuchando el puerto 8080')
})


/*
  Hacer que las rutas de hola y adios reaccionen a los dferentes
  métodos (GET , POST).
  Pos /hola --> hola koder, estás intentando crear
  GET /hola -> hola koder, estas intentando obtener
  POST /adios --> hasta la vista baby con un post
  GET /adios --> hasta la vista baby con un GET
*/

/*
1. Investigar como cambiar el header content type de la respuesta
2. Cambiar el header content type de la respuesta por el de html
 */
