const mongoose = require('mongoose');
const db = require('../config/keys').mongoURI;

const options = {
    useNewUrlParser: true
}

const init = () => { 
    mongoose.connect(db, options)
    .then((conn) => {
        console.log('Connected to MongoDB.');
    })
    .catch((err) => {
        console.log(err);
    });
};

module.exports = {
    init
}