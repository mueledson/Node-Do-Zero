//                                  Node Puro

// import { createServer } from "node:http"

// const server = createServer((request, response) => {
//     response.write('Hello!')

//     return response.end()
// })

// server.listen(3333)

//                                  Fastify

import { fastify } from "fastify";
import { DatabaseMemory } from "./database-memory.js";

const server = fastify()

const database = new DatabaseMemory()

server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body

    console.log(body)

    database.create({
        title,
        description,
        duration,
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    return 'Node!'
})

server.put('/videos/:id', () => {
    return 'Hello!'
})

server.delete('/videos/:id', () => {
    return 'Hello!'
})

server.listen({
    port: 3333
})

// Fastify é um microFramework