//                                  Node Puro

// import { createServer } from "node:http"

// const server = createServer((request, response) => {
//     response.write('Hello!')

//     return response.end()
// })

// server.listen(3333)

//                                  Fastify

import { fastify } from "fastify";

const server = fastify()

server.get('/', () => {
    return 'Opa!'
})
server.get('/node', () => {
    return 'Node!'
})
server.get('/helo', () => {
    return 'Hello!'
})

server.listen({
    port: 3333
})

// Fastify é um microFramework