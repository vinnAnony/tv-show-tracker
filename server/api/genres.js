const express = require('express');
const router = express.Router();

const genresController = require("../controllers/genre.controller");

router.route('/genres')
    .post(genresController.create)

    .get(genresController.findAll);

router.route('/genres/:id')

    .get(genresController.findOne)

    .put(genresController.update)

    .delete(genresController.delete);

router.route('/genre-subscriptions')
    .get(genresController.findAllGenreSubscriptions);

//add search

module.exports = router