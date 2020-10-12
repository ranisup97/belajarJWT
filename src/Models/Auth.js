const db = require("../Helpers/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authModel = {
  register: (body) => {
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
  login: (body) => {
    return new Promise((resolve, reject) => {
      const { email, password } = body;
      const query = "SELECT * FROM profile WHERE email=?";
      db.query(query, email, (err, data) => {
        let dataUser = data[0];
        if (!data.length) {
          reject("Email Salah.");
        } else {
          if (!err) {
            const token = jwt.sign(
              {
                email: dataUser.email,
                id: dataUser.id,
                name: dataUser.name,
              },
              process.env.SECRET_KEY
            );

            bcrypt.compare(password, dataUser.password, function (err, result) {
              if (err) {
                reject("Password Salah");
              } else {
                if (!result) {
                  reject("Password Salah");
                } else {
                  const sql = "SELECT * FROM profile WHERE password=?";
                  db.query(sql, dataUser.password, (err, data) => {
                    if (!err) {
                      resolve(token);
                    } else {
                      reject("Password Salah");
                    }
                  });
                }
              }
            });
          } else {
            reject(err);
          }
        }
      });
    });
  },
};

module.exports = authModel;
