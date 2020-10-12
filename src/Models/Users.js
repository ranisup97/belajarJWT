const db = require('../Helpers/db');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = {
    getAllUsers: ()=> {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM profile', (err, res) => {
                if(!err) {
                    resolve(res)
                }
                console.log(err)
            })
        })
    },

    createUser: (body) => {
        return new Promise((resolve, reject) => {
          bcrypt.genSalt(10, function (err, salt) {
            const { password } = body;
            bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body, password: hashedPassword };
              if (err) {
                reject(err);
              }
              const query = "INSERT INTO profile SET ?";
              db.query(query, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          });
        });
      },

      deleteUser: (body) => {
        return new Promise((resolve, reject) => {
          bcrypt.genSalt(10, function (err, salt) {
              const {id} =req.params;
            const { password } = body;
            bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body, password: hashedPassword };
              if (err) {
                reject(err);
              }
              const query = `DELETE FROM profile WHERE id=${id}`;
              db.query(query, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          });
        });
      },

      updatePUT: (body) => {
        return new Promise((resolve, reject) => {
          bcrypt.genSalt(10, function (err, salt) {
            //   const {id} =req.params;
            const { password } = body;
            bcrypt.hash(password, salt, function (err, hashedPassword) {
              const newBody = { ...body, password: hashedPassword };
              if (err) {
                reject(err);
              }
              // const query = 
              db.query(`UPDATE profile SET? WHERE id = ${id}`,query, newBody, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              });
            });
          });
        });
      },

      deleteUser: (setData) => {
        return new Promise((resolve, reject) => {
          // bcrypt.genSalt(10, function (err, salt) {
            // const {id} =param
              const query = `DELETE * FROM profile WHERE id =?`;
              db.query(query,setData, (err, data) => {
                if (!err) {
                  resolve(newBody);
                } else {
                  reject(err);
                }
              // });
            });
          });
        
      },



    //   destroy: function(con, id, callback) {
    //     con.query(`DELETE FROM profile WHERE id = ${id}`, callback)
    //   }

    };
    




 


module.exports = userModel

