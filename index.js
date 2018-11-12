const express = require('express')
const { ApolloServer } = require('apollo-server-express')

// construye un schema, usando GraphQL
const typeDefs = require('./schema')

// provee resolvers para nuestro esquema
const resolvers = {
    Query: {
        cursos: () => {
            return [{
                id: 1,
                titulo: 'Curso de Prueba',
                descripcion: 'Prueba exitosa'
            },
            {
                id: 2,
                titulo: 'Curso de Prueba 2',
                descripcion: 'Prueba exitosa 2'
            }]
        }
    },
    Curso: {
        profesor: () => {
            return {
                nombre: 'joni'
            }
        },
        comentarios: () => {
            return [{
                    id: 1,
                    nombre: 'luisj135',
                    cuerpo: 'testing GraphQl'
                },
                {
                    id: 2,
                    nombre: 'Platzi',
                    cuerpo: 'testing Platzi GraphQl'
                }
            ]
        }
    }
}

// inicializar apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers
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