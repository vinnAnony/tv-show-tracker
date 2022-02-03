const express = require('express');
const router = express.Router();

const subscriptionsController = require("../controllers/subscription.controller");

router.route('/subscriptions')
    .post(subscriptionsController.create)

    .get(subscriptionsController.findAll);

router.route('/subscriptions/:id')

    .get(subscriptionsController.findOne)

    .put(subscriptionsController.update)

    .delete(subscriptionsController.delete);

//add search

module.exports = router