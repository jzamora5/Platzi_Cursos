function isObject(subject) {
  return typeof subject === "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}

// class SuperObject {
//   static isObject(subject) {
//     return typeof subject === "object";
//   }

//   static isArray(subject) {
//     return Array.isArray(subject);
//   }

//   static deepCopy(subject) {
//     let copySubject;

//     const subjectIsArray = isArray(subject);
//     const subjectIsObject = isObject(subject);

//     if (subjectIsArray) {
//       copySubject = [];
//     } else if (subjectIsObject) {
//       copySubject = {};
//     } else {
//       return subject;
//     }

//     for (key in subject) {
//       const keyIsObject = isObject(subject[key]);

//       if (keyIsObject) {
//         copySubject[key] = deepCopy(subject[key]);
//       } else {
//         if (subjectIsArray) {
//           copySubject.push(subject[key]);
//         } else {
//           copySubject[key] = subject[key];
//         }
//       }
//     }

//     return copySubject;
//   }
// }

function SuperObject() {}

SuperObject.isObject = function isObject(subject) {
  return typeof subject === "object";
};

SuperObject.deepCopy = function deepCopy(subject) {
  let copySubject;

  const subjectIsArray = isArray(subject);
  const subjectIsObject = isObject(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
};

// Abstracción y Encapsulamiento con DeepCopy

const studentBase = {
  name: undefined,
  email: undefined,
  age: undefined,
  approvedCourses: undefined,
  learningPaths: undefined,
  socialMedia: {
    twitter: undefined,
    instagram: undefined,
    facebook: undefined,
  },
};

const juanDeepCopy = deepCopy(studentBase);
// Object.defineProperty(juan, "name", {
//   value: "Juanito",
//   configurable: false,
// });
Object.seal(juanDeepCopy);
// console.log("JuanDeepCopy is Sealed", Object.isSealed(juanDeepCopy));

// juan.name = "Juanito";
// Object.isFrozen(juan);

// Factory Pattern & RORO (Receive Object Return Object)

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({ name = requiredParam("name"), courses = [] }) {
  this.name = name;
  this.courses = courses;

  // const private = {
  //   _name: name,
  //   _courses: courses,
  // };

  // const public = {
  //   get courses() {
  //     return private._courses;
  //   },

  //   get name() {
  //     return private._name;
  //   },

  //   set name(newName) {
  //     if (newName.length !== 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener almenos 1 caracter");
  //     }
  //   },
  // };

  // return public;
}

function Student({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  if (isArray(learningPaths)) {
    this.learningPaths = [];

    for (learningPath of learningPaths) {
      if (learningPath instanceof LearningPath) {
        this.learningPaths.push(learningPath);
      }
    }
  }

  this.name = name;
  this.email = email;
  this.age = age;

  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  // const private = {
  //   _name: name,
  //   _learningPaths: learningPaths,
  // };

  // const public = {
  //   age,
  //   email,
  //   approvedCourses,
  //   socialMedia: {
  //     twitter,
  //     instagram,
  //     facebook,
  //   },

  //   get name() {
  //     return private._name;
  //   },

  //   set name(newName) {
  //     if (newName.length !== 0) {
  //       private._name = newName;
  //     } else {
  //       console.warn("Tu nombre debe tener almenos 1 caracter");
  //     }
  //   },

  //   get learningPaths() {
  //     return private._learningPaths;
  //   },

  //   set learningPaths(newLP) {
  //     if (!newLP.name) {
  //       console.warn("Tu LP no tiene la propiedad nombre");
  //       return;
  //     }

  //     if (!newLP.courses) {
  //       console.warn("Tu LP no tiene courses");
  //       return;
  //     }

  //     if (!isArray(newLP.courses)) {
  //       console.warn("Tu LP no  es una lista de cursos");
  //       return;
  //     }

  //     private._learningPaths.push(newLP);
  //   },

  //   // readName(newName) {
  //   //   return private._name;
  //   // },
  //   // changeName(newName) {
  //   //   private._name = newName;
  //   // },
  // };

  // Object.defineProperty(public, "readName", {
  //   writable: false,
  //   configurable: false,
  // });

  // Object.defineProperty(public, "changeName", {
  //   writable: false,
  //   configurable: false,
  // });

  // return public;
}

const escuelaWeb = new LearningPath({
  name: "Escuela de WebDev",
  courses: [],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [],
});

let juan = new Student({
  name: "Juanito",
  email: "juanito@frijolitos.com",
  learningPaths: [escuelaWeb, escuelaData, { name: "Escuela" }],
});
