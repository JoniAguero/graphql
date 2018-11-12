module.exports = `
    type Profesor {
        id: ID!
            nombre: String!
            nacionalidad: String!
            genero: Genero
        cursos: [Curso]
    }

    enum Genero {
        MASCULINO
        FEMENINO
    }

    input newProfesor {
        nombre: String!
        genero: Genero
        nacionalidad: String!
    }

    input editProfesor {
        nombre: String
        genero: Genero
        nacionalidad: String
    }
`