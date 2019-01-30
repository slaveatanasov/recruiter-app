var userCreate = {
    first_name: {type: 'string', empty: false},
    last_name: {type: 'string', empty: false},
    email: {type: 'email', empty: false},
    password: {type: 'string', empty: false, min: 8, max: 32},
    type: {type: 'string', empty: false}
};

var userLogin = {
    email: {type: 'email', empty: false},
    password: {type: 'string', empty: false}
};

module.exports = {
    userCreate,
    userLogin
}