const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const path = require('path');
const fileUpload = require('express-fileupload');

const tokenSecret = require('./config/keys').tokenSecret;
const mongodb = require('./db/mongodb');

const auth = require('./handlers/auth');
const users = require('./handlers/users');
const cvs = require('./handlers/cvs');
const companies = require('./handlers/companies');
const upload = require('./handlers/upload');

mongodb.init();

const app = express();

app.use(bodyParser.json());

// CORS Setup
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header('Access-Control-Allow-Methods', "GET, PUT, POST, PATCH, DELETE");
        return res.status(200).json({});
    }
    next()
});

app.use(jwt({
        secret: tokenSecret
    }).unless({
        path: [
            {url: '/', methods: ['GET']},
            {url: '/auth/login', methods: ['POST']},
            {url: '/users', methods: ['POST']}
        ]
    })
);

app.use(fileUpload({
    limits: {
        fileSize: 1000000
    }
}));

// ROUTES
app.post('/auth/login', auth.login);
app.get('/auth/logout', auth.logout);

app.get('/users', users.getAllUsers);
app.post('/users', users.createUser);
app.get('/users/:id', users.getUserById);
app.delete('/users', users.deleteUserById);
app.put('/users/:id', users.updateUserById);

app.get('/cvs', cvs.getAllCVs);
app.post('/cvs', cvs.createCV);
app.get('/cvs/:id', cvs.getCVById);
app.get('/cvs/user/:id', cvs.getCVByUserId);
app.delete('/cvs', cvs.deleteCVByUserId);
app.put('/cvs/:id', cvs.updateCVById);
app.get('/search/cvs', cvs.getCVByTag);

app.get('/companies', companies.getAllCompanies);
app.post('/companies', companies.createCompany); 
app.get('/companies/:id', companies.getCompanyById);
app.get('/companies/user/:id', companies.getCompanyByUserId);
app.delete('/companies', companies.deleteCompanyByUserId);
app.put('/companies/:id', companies.updateCompanyById);
app.get('/search/companies', companies.getCompanyByTag);

app.post('/upload/profileimage/:id', upload.uploadProfileImage);
app.post('/upload/document/:id', upload.uploadDocument);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send('Invalid token.');
    }
});

// Server static assets if in production:
if (process.env.NODE_ENV === 'production') {
    //Set static folder:
    app.use(express.static('client/build'));
    
    // app.use(jwt({
    //     secret: tokenSecret
    // }).unless({
    //     path: [
    //         {url: '/', methods: ['GET']},
    //         {url: '/auth/login', methods: ['POST']},
    //         {url: '/users', methods: ['POST']}
    //     ]
    // })
    // );
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));