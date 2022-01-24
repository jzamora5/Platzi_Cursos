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

function createStudent({
  name = requiredParam("name"),
  age,
  email = requiredParam("email"),
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  const private = {
    _name: name,
  };

  const public = {
    age,
    email,
    approvedCourses,
    learningPaths,
    socialMedia: {
      twitter,
      instagram,
      facebook,
    },
    readName(newName) {
      return private._name;
    },
    changeName(newName) {
      private._name = newName;
    },
  };

  Object.defineProperty(public, "readName", {
    writable: false,
    configurable: false,
  });

  Object.defineProperty(public, "changeName", {
    writable: false,
    configurable: false,
  });

  return public;
}

let juan = createStudent({
  name: "Juanito",
  age: "18",
  email: "juanito@frijolitos.com",
  twitter: "fjuandc",
});
