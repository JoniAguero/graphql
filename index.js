const express = require('express')
const { ApolloServer } = require('apollo-server-express')

// construye un schema, usando GraphQL
const schema = require('./schema')

require('./db/setup')

// inicializar apollo server
const server = new ApolloServer({
    schema
})

// inicializar express
const app = express()

// aplicar middleware de apollo en express
server.applyMiddleware({
    app
})

// iniciar el servidor
app.listen({
        port: 4000
    }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)