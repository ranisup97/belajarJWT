const authModel = require("../Models/Auth");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  register: (req, res) => {
    authModel
      .register(req.body)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "Register Successfully",
          data: data,
        });
      })
      .catch((err) => {
        res.send({
            success: false,
            message: err.message,
          });
      });
  },
  login: (req, res) => {
    authModel
      .login(req.body)
      .then((data) => {
        res.status(200).send({
          success: true,
          message: "Login Successfully",
          token: data,
        });
      })
      .catch((err) => {
        res.send({
            success: false,
            message: err,
          });
      });
  },
};
