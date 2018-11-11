const { gql } = require('apollo-server-express')

const typeDefs = gql`

    """Esto es un curso en el sistema"""
    type Curso {
        id: ID!
        titulo: String!
        """Esta es la descripción del curso"""
        descripcion: String!
        profesor: Profesor
        rating: Float
        comentarios: [Comentario]
    }

    type Profesor{
        id: ID!
        nombre: String!
        nacionalidad: String!
        genero: Genero
        cursos: [Curso]
    }

    enum Genero{
        MASCULINO
        FEMENINO
    }

    type Comentario{
        id: ID!
        nombre: String!
        cuerpo: String!
    }

    """Estos son los endpoints"""
    type Query{
        cursos: [Curso]
        profesores: [Profesor]
        curso(id: Int): Curso
        profesor(id: Int): Profesor
    }
`

module.exports = typeDefs