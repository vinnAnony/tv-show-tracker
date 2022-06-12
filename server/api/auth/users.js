const express = require('express');
const router = express.Router();

const userController = require("../../controllers/user.controller");

let users = [];

router.route('/register')
    .post(userController.register);

router.route('/login')
    .post(userController.login);

router.route('/users')
    .get(userController.findAll);
router.route('/user/:id')
    .put(userController.update)
    .delete(userController.delete);


module.exports = router