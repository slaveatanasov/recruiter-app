const mongoose = require('mongoose');

const Users = mongoose.model(
    'users',
    new mongoose.Schema({
        "first_name": String,
        "last_name": String,
        "email": String,
        "password": String,
        "type": String,
        "registration_date": {type: Date, default: Date.now}
    })
);

let getAllUsers = (cb) => {
    Users.find({}, {password: 0}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getUserByEmail = (email, cb) => {
    Users.findOne({email: email}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getUserByType = (type, cb) => {
    Users.find({type: type}, {password: 0}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getUserById = (id, cb) => {
    Users.findById(id, {password: 0}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let createUser = (userData, cb) => {
    let user = new Users(userData);
    user.save((err) => {           
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let deleteUserById = (id, cb) => {
    Users.deleteOne({_id: id}, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let updateUserById = (id, data, cb) => {
    Users.updateOne({_id: id}, data, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    getAllUsers,
    getUserByEmail,
    getUserById,
    createUser,
    deleteUserById,
    updateUserById,
    getUserByType
}