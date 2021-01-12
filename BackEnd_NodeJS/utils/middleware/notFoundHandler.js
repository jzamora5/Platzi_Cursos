const boom = require('@hapi/boom');

function notFoundHandler(req, res) {
  console.log(boom.notFound());

  const {
    output: { statusCode, payload },
  } = boom.notFound();

  res.status(statusCode).json(payload);
}

module.exports = notFoundHandler;
