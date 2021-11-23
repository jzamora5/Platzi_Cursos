const laura = {
  name: "Laura",
  age: 20,
  cursosAprobados: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};

function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};

const juanita = new Student("Juanita Alejandra", 15, [
  "Curso de Introducción a la Producción de Videojuegos",
  "Curso de Creación de Personajes",
]);

// Prototipos con la sintaxis de clases

class Student2 {
  constructor({ name, age, email, cursosAprobados = [] }) {
    this.email = email;
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  email: "miguelito@platzi.com",
  name: "Miguel",
  age: 28,
});
