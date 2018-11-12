const { gql } = require('apollo-server-express')
const { makeExecutableSchema } = require('graphql-tools');
const Curso = require('./Curso');
const Profesor = require('./Profesor');

const resolvers = require('../resolvers')

const rootQuery = gql`

    """EndPoints"""
    type Query{
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }

    """Mutations"""
    type Mutation {
        profesorAdd(profesor: newProfesor): Profesor
        profesorEdit(idProfesor: Int!, profesor: editProfesor): Profesor
        profesorRemove(idProfesor: Int!): Profesor
    }
`
const schema = makeExecutableSchema({
    typeDefs: [rootQuery, Curso, Profesor],
    resolvers
})

module.exports = schema