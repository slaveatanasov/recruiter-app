var validator = require('fastest-validator');
var cvs = require('../models/cvs');
var validatorSchema = require('../validators/cvs');
var v = new validator();


// Validate if required fields are filled, format the dates, associate CV profile in database with current user, add CV to database.
var createCV = (req, res) => {
    var valid = v.validate(req.body, validatorSchema.cvCreate);
    if(valid === true) {
        var userId = req.user.id;
        var cvData = formatDates(req.body);
            cvData.userId = userId;
        var splitTags = [];
            splitTags = cvData.experience_tags.split(' ');
            cvData.experience_tags = splitTags;
        cvs.addCV(cvData, (err) => {
            if(err){
                return res.status(500).send(err);
            } else {
                return res.send("CV added.");
            }
        });
    } else {
            // let result = "";
            // for(let error of valid) {
            //     result = error[0].message
            // }
            // res.status(400).send(result);
            res.status(400).send(valid[0].message);
    }
};

// Retrieve all CVs from database.
var getAllCVs = (req, res) => {
    console.log(req.headers);
    cvs.getAllCVs((err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

// Retrieve CV from database by its _id.
var getCVById = (req, res) => {
    var id = req.params.id;
    cvs.getCVById(id, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

// Retrieve CV from database by userId key/value in CV model (id of user that created the CV profile).
var getCVByUserId = (req, res) => {
    var id = req.params.id;
    cvs.getCVByUserId(id, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

// Retrieve CV from database by its tags key/value.
var getCVByTag = (req, res) => {
    var tags = [];
    tags = req.query.tags.split(' ');
    cvs.getCVByTag(tags, (err, data) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send(data);
        }
    });
};

// Update CV in database by its _id.
var updateCVById = (req, res) => {
    cvs.getCVByUserId(req.user.id, (err, cv) => {
        if (err) {
            return res.send(err);
        } else {
            if (cv.userId == req.user.id) {
                var id = req.params.id;
                var cvData = formatDates(req.body);
                cvs.updateCVById(id, cvData, (err) => {
                    if(err) {
                        return res.status(500).send(err);
                    } else {
                        return res.send("CV updated.");
                    }
                });
            } else {
                res.status(400).send("Not authorized.");
            }
        }
    });
};

// Delete CV in database by its _id.
var deleteCVById = (req, res) => {
    var id = req.params.id;
    cvs.deleteCVById(id, (err) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send("CV deleted.");
        }
    });
};

// Delete CV in database by userId.
var deleteCVByUserId = (req, res) => {
    var id = req.user.id;
    cvs.deleteCVByUserId(id, (err) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            return res.send("CV deleted.");
        }
    })
};

// Format the date for entry in database as ISOString.
var formatDates = (cvData) => {
    if(cvData.birth_date != undefined && cvData.birth_date != null){
        cvData.birth_date = new Date(cvData.birth_date);
    }
    if(cvData.education != undefined && cvData.education != null){
        for(var i = 0; i < cvData.education.length; i++){
            if(cvData.education[i].start_at != undefined && cvData.education[i].start_at != null){
                cvData.education[i].start_at = new Date(cvData.education[i].start_at);
            }
            if(cvData.education[i].finish_at != undefined && cvData.education[i].finish_at != null){
                cvData.education[i].finish_at = new Date(cvData.education[i].finish_at);
            }
        }
    }
    if(cvData.experience != undefined && cvData.experience != null){
        for(var i = 0; i < cvData.experience.length; i++){
            if(cvData.experience[i].start_at != undefined && cvData.experience[i].start_at != null){
                cvData.experience[i].start_at = new Date(cvData.experience[i].start_at);
            }
            if(cvData.experience[i].finish_at != undefined && cvData.experience[i].finish_at != null){
                cvData.experience[i].finish_at = new Date(cvData.experience[i].finish_at);
            }
        }
    }
    return cvData;
};

module.exports = {
    createCV,
    getAllCVs,
    getCVById,
    updateCVById,
    deleteCVById,
    getCVByTag,
    getCVByUserId,
    deleteCVByUserId
}