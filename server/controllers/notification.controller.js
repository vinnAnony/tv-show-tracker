const sendNotification = require('../config/notification.config');
const db = require("../models");
const {body, validationResult} = require('express-validator');
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");

const Subscription = db.subscriptions;
const User = require("../models/user.model")(sequelize, db.Sequelize);
const Movie = require("../models/movie.model")(sequelize, db.Sequelize);

exports.sendNotificationToAllSubscribers = [
    body('subject').isLength({min: 1}).withMessage('Notification subject required'),
    body('message').isLength({min: 1}).withMessage('Notification message required'),
    (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
    let subscriptions ={};
    let subject = req.body.subject;
    let message = req.body.message;

    Subscription.findAll({
        include:[
            {model: User, required: true},
            // {model: Movie, required: true},
        ]
    })
        .then(data => {
            if (data) {
                subscriptions = data;
            } else {
                res.status(404).send({
                    message: `Cannot find subscriptions`
                });
            }
        }).then(() =>{
        for (const subscription of subscriptions) {
                console.log(subscription.user.email);
                sendNotification({
                    email: subscription.user.email,
                    subject: subject,
                    body: message
                });
            }
        res.status(200).send({
            success: true,
            message: "Email sent"
        });
    })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving subscriptions with => " + err.message
            });
        });
}];

exports.sendNotificationToSpecificSubscribers = [
    body('genre_id').isLength({min: 1}).withMessage('Subscriber genre required'),
    body('subject').isLength({min: 1}).withMessage('Notification subject required'),
    body('message').isLength({min: 1}).withMessage('Notification message required'),
    (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }
        let subscriptions ={};
        let subject = req.body.subject;
        let message = req.body.message;
        let genre_id = req.body.genre_id;

        Subscription.findAll({
            where:{
                id:genre_id
            },
            include:[
                {model: User, required: true},
                // {model: Movie, required: true},
            ]
        })
            .then(data => {
                if (data) {
                    subscriptions = data;
                } else {
                    res.status(404).send({
                        message: `Cannot find subscriptions`
                    });
                }
            }).then(() =>{
            for (const subscription of subscriptions) {
                console.log(subscription.user.email);
                sendNotification({
                    email: subscription.user.email,
                    subject: subject,
                    body: message
                });
            }
            res.status(200).send({
                success: true,
                message: "Email sent"
            });
        })
            .catch(err => {
                res.status(500).send({
                    message: "Error retrieving subscriptions with => " + err.message
                });
            });
    }];