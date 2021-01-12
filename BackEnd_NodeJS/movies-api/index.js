const express = require('express');

const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

// body parser
app.use(express.json());

moviesApi(app);

// Catch 404
app.use(notFoundHandler);

// Los middleware de error SIEMPRE
// deben ir despues de las rutas
// las rutas también son middleware

// Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.get('/', function (req, res) {
  res.send('hello world');
});

app.get('/json', function (req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
