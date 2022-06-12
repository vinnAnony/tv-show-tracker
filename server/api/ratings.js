const express = require('express');
const router = express.Router();

const ratingsController = require("../controllers/rating.controller");

router.route('/ratings')
    .post(ratingsController.create)

    .get(ratingsController.findAll);

router.route('/ratings/:id')

    .get(ratingsController.findOne)

    .put(ratingsController.update)

    .delete(ratingsController.delete);

//add search

module.exports = router