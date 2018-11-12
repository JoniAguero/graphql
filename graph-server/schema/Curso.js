module.exports = `
    """Cursos"""
    type Curso {
        id: ID!
        titulo: String!
        """Esta es la descripción del curso"""
        descripcion: String!
        profesor: Profesor
        rating: Float
        comentarios: [Comentario]
    }

    type Comentario{
        id: ID!
        nombre: String!
        cuerpo: String!
    }
`