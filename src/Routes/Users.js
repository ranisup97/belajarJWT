const userRoute = require('express').Router()
const usersController = require('../Controllers/Users')

userRoute.get('/', usersController.getAllUsers)
userRoute.post('/', usersController.createUser)

userRoute.put('/:id', usersController.updatePUT)
userRoute.delete('/:id', usersController.deleteUser)

// userRoute.delete('/:id', usersController.destroy)

module.exports = userRoute


