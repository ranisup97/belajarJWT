const userModel = require("../Models/Users");
const formResponse = require("../Helpers/FormResponse");

module.exports = {
  getAllUsers: (req, res) => {
    userModel
      .getAllUsers()
      .then((data) => formResponse(data, res, 200))
      .catch((err) => console.log(err));
  },

  createUser: (req, res) => {
    userModel
      .createUser(req.body)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "create User Successfully",
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

  updatePUT: (req, res) => {
    userModel
      .updatePUT(req.body, req.params.id)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "update User Successfully",
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

  deleteUser: (req, res) => {
    userModel
      .deleteUser(req.params.id)
      .then((data) => {
        res.status(201).send({
          success: true,
          message: "delete User Successfully",
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

  // destroy: function(req, res) {
  //   users.destroy(req.con, req.params.id, function(err) {
  //     res.redirect("/users")
  //   })
  // }



};
