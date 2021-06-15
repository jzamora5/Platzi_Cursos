'use strict';

const courses = [
  {
    _id: '1',
    title: 'Mi Titulo',
    teacher: 'Mi Profesor',
    description: 'Una descripcion',
    topic: 'Programacion',
  },
  {
    _id: '2',
    title: 'Mi Titulo 2',
    teacher: 'Mi Profesor',
    description: 'Una descripcion',
    topic: 'Programacion',
  },
  {
    _id: '3',
    title: 'Mi Titulo 3',
    teacher: 'Mi Profesor',
    description: 'Una descripcion',
    topic: 'Programacion',
  },
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses;
    },
    getCourse: (root, args) => {
      const course = courses.filter((course) => course._id === args.id);
      return course.pop();
    },
  },
};
