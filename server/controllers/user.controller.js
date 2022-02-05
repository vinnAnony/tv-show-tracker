const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require('uuid');


exports.register = [
    body('user_name').isLength({min: 1}).withMessage('Username required'),
    body('full_name').isLength({min: 1}).withMessage('Full Name required'),
    body('email').isEmail().withMessage('Email not valid'),
    body('password').isLength({min:1}).withMessage('Password required'),
    (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const hashedPassword = bcrypt.hashSync(req.body.password, 5);
        const user = {
            user_name: req.body.user_name,
            full_name: req.body.full_name,
            email: req.body.email,
            password: hashedPassword,
        };

        User.create(user)
            .then(data => {
                res.status(200).json({
                    success: true, message: 'User added', user: data
                })
            })
            .catch(err => {
                console.log(err.message)
            });
    }];
exports.login = [
    body('user_name').not().isEmpty().withMessage('Username required'),
    body('password').not().isEmpty().withMessage('Password required'),
    (req, res) => {

        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        //check if user exists
        const userName = req.body.user_name;
        const logPassword = req.body.password;
        User.findOne({
            where: { user_name: userName }
        })
            .then(data => {
                //res.send({user: data});
                if (data) {
                    let isValidated = bcrypt.compareSync(logPassword, data.password);
                    if (isValidated){
                        let user = {
                            id: data.id,
                            name: data.full_name,
                            username: data.user_name,
                            email: data.email,
                        };
                        const accessToken = jwt.sign({user}, uuidv4());
                        res.status(200).json({
                            success: true,
                            message: `Successful login`,
                            accessToken: accessToken,
                            user: user
                        })
                    }
                    else {

                        res.status(200).json({
                            success: false,
                            message: `Wrong credentials`
                        });
                    }
                } else {
                    res.status(200).json({
                        success: false,
                        message: `Account does not exist.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: "Error ---" + err.message
                });
            });
    }];

exports.findAll = (req, res) => {

    User.findAll({attributes: ['id', 'full_name', 'user_name', 'email', 'role_id']})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};