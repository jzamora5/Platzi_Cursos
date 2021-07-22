const cities = ['Ciudad de México', 'Bogotá', 'Lima', 'Buenos Aires', 'Guadalajara']

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)]
  return string 
}

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if(!str) reject(Error('Wrong string'))

    resolve(str.split('').reverse().join(''))
  })
}

module.exports = randomString