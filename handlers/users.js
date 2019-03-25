const bcrypt = require('bcryptjs');
const validator = require('fastest-validator');
const cvs = require('../models/cvs');
const companies = require('../models/companies');
const users = require('../models/users');
const validatorSchema = require('../validators/users');
let v = new validator({
    messages: {
        stringMin: "Password must be between 8 and 32 characters.",
        stringMax: "Password must be between 8 and 32 characters."
    }
});

// Retrieve all users from database.
var getAllUsers = (req, res) => {
    users.getAllUsers((err, data) => {
        if (err) {
            res.status(500).send("Internal server error! " + err);
        } else {
            res.send(data);
        }
    });
};

// Retrieve user from database by _id.
var getUserById = (req, res) => {
    var id = req.params.id;
    users.getUserById(id, (err, data) => {
        if (err) {
            res.status(404).send("User not found.");
        } else {
            res.send(data);
        }
    });
};

// Retrieve user from database by type (applicant / company).
var getUserByType = (req, res) => {
    var userType = req.body.type;
    users.getUserByType(userType, (err, data) => {
        if (err) {
            res.status(404).send("User not found.");
        } else {
            res.send(data);
        }
    });
};

// Validate if required fields are filled, check if email is already in database, encrypt password, add user to database.
var createUser = (req, res) => {
    const errors = {};
    var valid = v.validate(req.body, validatorSchema.userCreate);
    if (valid === true) {
        users.getUserByEmail(req.body.email, (err, data) => {
            if (err) {
                return res.send(err);
            } else {
                if (data == null) {
                    bcrypt.hash(req.body.password, 10, (err, hash) => {
                        var userData = req.body;
                        userData.password = hash;
                        users.createUser(userData, (err) => {
                            if (err) {
                                res.send(err);
                            } else {
                                res.status(201).send("User created.");
                            }
                        });
                    });
                } else {
                    errors.user = "User with that email already exists.";
                    res.status(400).json(errors);
                }
            }
        });
    } else {
        res.status(400).send(valid[0].message);
    }
};

// Update user in database by _id.
var updateUserById = (req, res) => {
    var id = req.user.id;
    users.getUserById(id, (err, user) => {
        if (err) {
            return res.send(err);
        } else {
            if (user._id == id) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    var userData = req.body;
                    userData.password = hash;
                    users.updateUserById(id, userData, (err) => {
                        if (err) {
                            return res.status(500).send(err);
                        } else {
                            return res.send("User info updated.");
                        }
                    });
                });
            } else {
                res.status(400).send("Not authorized.");
            }
        }
    });
};

// Delete user in database by _id.
var deleteUserById = (req, res) => {
    var id = req.user.id;
    users.deleteUserById(id, (err) => {
        if (err){
            res.status(500).send(err)
        } else {
            if (req.user.type === "applicant") {
                cvs.deleteCVByUserId(id, (err) => {
                    if(err) {
                        return res.status(500).send(err);
                    } else {
                        return res.send("User account and CV deleted.");
                    }
                })
            } else {
                companies.deleteCompanyByUserId(id, (err) => {
                    if (err) {
                        return res.status(500).send(err);
                    } else {
                        return res.send("User account and company profile deleted.");
                    }
                })
            }
        }
    });
};

// Retrieve currently logged in user by _id.
var getCurrentUserById = (req, res) => {
    var id = req.user.id; 
    users.getUserById(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById,
    getUserByType,
    getCurrentUserById
}