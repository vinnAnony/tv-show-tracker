const express = require('express');
const router = express.Router();

const moviesController = require("../controllers/movie.controller");

router.route('/movies')
    .post(moviesController.create)

    .get(moviesController.findAll);

router.route('/movies/:id')

    .get(moviesController.findOne)

    .put(moviesController.update)

    .delete(moviesController.delete);

//add search

module.exports = router