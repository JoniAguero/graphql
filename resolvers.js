const Curso = require('./models/Curso')
const Profesor = require('./models/Profesor')

// provee resolvers para nuestro esquema
const resolvers = {
    Query: {
        cursos: () => Curso.query().eager('[profesor, comentarios]'),
        profesores: () => Profesor.query().eager('cursos'),
        curso: (rootValue, args) => Curso.query().eager('[profesor, comentarios]').findById(args.id),
        profesor: (rootValue, args) => Profesor.query().eager('cursos').findById(args.id)
    },
    Mutation: {
        profesorAdd: (_, args) => {
            return Profesor.query().insert(args.profesor)
        },
        profesorEdit: (_, args) => {
            return Profesor.query().patchAndFetchById(args.idProfesor, args.profesor)
        },
        profesorRemove: async (_, args) => {
            const ProfesorDeleted = await Profesor.query().findById(args.idProfesor)
            await Profesor.query().deleteById(args.idProfesor)
            return ProfesorDeleted
        }
    }
}

module.exports = resolvers