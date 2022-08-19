const express = require("express");
const bodyParser = require("body-parser");

const config = require("../config.js");
const router = require("./network");

const app = express();

app.use(bodyParser.json());

// RUTAS
app.use("/", router);

app.listen(config.mysqlService.port, () => {
  console.log(
    "Servicio de mysql escuchando en el puesto",
    config.mysqlService.port
  );
});
