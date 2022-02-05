const sendNotification = require('../config/notification.config');
const db = require("../models");
const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/database");

const Subscription = db.subscriptions;
const User = require("../models/user.model")(sequelize, db.Sequelize);
const Movie = require("../models/movie.model")(sequelize, db.Sequelize);

exports.sendNotificationToAllSubscribers = (req, res) => {
    let subscriptions ={};

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
                    subject: 'Test Subject',
                    body: 'Test notification'
                });
            }
        res.status(200).send({email: "sent"});
    })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving subscriptions with => " + err.message
            });
        });
};