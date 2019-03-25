const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validator = require('fastest-validator');
const tokenSecret = require('../config/keys').tokenSecret;
const users = require('../models/users');
const validatorSchema = require('../validators/users');
const v = new validator();

// Get user from database by email, validate if email exists. Compare password, and get JSON Web Token by entering user data and secret code as parameters.
// Token is retrieved and used as: "Bearer " plus the token.

var login = (req, res) => {
    let errors = "";
    var valid = v.validate(req.body, validatorSchema.userLogin);
    if (valid === true) {
        users.getUserByEmail(req.body.email, (err, userData) => {
            if (!userData) {
                errors = "No user registered with that email.";
                return res.status(404).send(errors)
            }
            bcrypt.compare(req.body.password, userData.password)
            .then((valid) => {
                if (valid) {
                    var ud = {
                        id: userData._id,
                        email: userData.email,
                        first_name: userData.first_name,
                        last_name: userData.last_name,
                        type: userData.type
                    };
                    var token = jwt.sign(ud, tokenSecret, { expiresIn: "2h" });
                    return res.send(token);
                } else {
                    errors = "Wrong password.";
                    return res.status(403).send(errors);
                }
            }).catch((err) => {
                errors = "Internal server error.";
                return res.status(500).send(errors);
            })
        });
    } else {
        res.status(400).send(valid);
    }
};

var logout = (req, res) => {
    res.send(req.user);
};

module.exports = {
    login,
    logout
}