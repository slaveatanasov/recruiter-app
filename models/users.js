var mongoose = require('mongoose');

var Users = mongoose.model(
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

var getAllUsers = (cb) => {
    Users.find({}, {password: 0}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getUserByEmail = (email, cb) => {
    Users.findOne({email: email}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getUserByType = (type, cb) => {
    Users.find({type: type}, {password: 0}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var getUserById = (id, cb) => {
    Users.findById(id, {password: 0}, (err, data) => {
        if(err){
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

var createUser = (userData, cb) => {
    let user = new Users(userData);
    user.save((err, data) => {           
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var deleteUserById = (id, cb) => {
    Users.deleteOne({_id: id}, (err) => {
        if (err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

var updateUserById = (id, data, cb) => {
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