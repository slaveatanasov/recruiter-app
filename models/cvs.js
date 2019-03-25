const mongoose = require('mongoose');

const CVS = mongoose.model(
    'cvs', 
    new mongoose.Schema({
        "userId": String,
        "first_name": String,
        "last_name": String,
        "birth_date": { type: Date, default: Date },
        "email": String,
        "phone": String,
        "location_country": String,
        "location_city": String,
        "location_zip_code": Number,
        "location_address": String,
        "education_institution": String,
        "education_level": String,
        "education_degree": String,
        "education_start_at": { type: Date, default: Date },
        "education_finish_at": { type: Date, default: Date },
        "experience_position": String,
        "experience_job_description": String,
        "experience_tags": [String],
        "experience_employer": String,
        "experience_start_at": { type: Date, default: Date },
        "experience_finish_at": { type: Date, default: Date },
        "skills_languages": String,
        "skills_communication_skills": String,
        "skills_organizational_skills": String,
        "skills_digital_skills": String
   })
);

let addCV = (data, cb) => {
    let cv = new CVS(data);
    cv.save((err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let getAllCVs = (cb) => {
    CVS.find({}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getCVById = (id, cb) => {
    CVS.findOne({_id: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getCVByTag = (tags, cb) => {
    CVS.find({"experience_tags": {$in: tags}}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getCVByUserId = (id, cb) => {
    CVS.findOne({userId: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let updateCVById = (id, data, cb) => {
    CVS.updateOne({_id: id}, data, (err) => {
        if(err) {
            return cb(err)
        } else {
            return cb(null);
        }
    });
};

let deleteCVById = (id, cb) => {
    CVS.deleteOne({_id: id}, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let deleteCVByUserId = (id, cb) => {
    CVS.deleteOne({userId: id}, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    addCV,
    getAllCVs,
    getCVById,
    updateCVById,
    deleteCVById,
    getCVByTag,
    getCVByUserId,
    deleteCVByUserId
}