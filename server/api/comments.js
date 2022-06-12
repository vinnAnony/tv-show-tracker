const express = require('express');
const router = express.Router();

const commentsController = require("../controllers/comment.controller");

router.route('/comments')
    .post(commentsController.create)

    .get(commentsController.findAll);

router.route('/comments/:id')

    .get(commentsController.findOne)

    .put(commentsController.update)

    .delete(commentsController.delete);


//add search

module.exports = router