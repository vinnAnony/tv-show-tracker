const express = require('express');
const router = express.Router();

const actorsController = require("../controllers/actor.controller");

router.route('/actors')
    .post(actorsController.create)

    .get(actorsController.findAll);

router.route('/actors/:id')

    .get(actorsController.findOne)

    .put(actorsController.update)

    .delete(actorsController.delete);

//add search

module.exports = router