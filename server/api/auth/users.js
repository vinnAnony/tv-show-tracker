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


module.exports = router