const express = require("express");

const response = require("../../../network/response");
const Controller = require("./index");

const router = express.Router();

router.post("/login", function (req, res) {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch((e) => {
      console.log(e);
      response.error(req, res, "Información Invalida", 400);
    });
});

module.exports = router;
