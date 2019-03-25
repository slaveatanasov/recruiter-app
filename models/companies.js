const mongoose = require('mongoose');

const Companies = mongoose.model(
    'companies', 
    new mongoose.Schema({
        "company_name": String,
        "established": { type: Date, default: Date },
        "email": String,
        "website": String,
        "phone": String,
        "userId": String,
        "location_country": String,
        "location_city": String,
        "location_zip_code": Number,
        "location_address": String,
        "company_information_industry": String,
        "company_information_scope_of_work": String,
        "company_information_no_of_employees": Number,
        "company_information_tags": [String],
        "company_information_expected_hires_per_year": Number,
        "company_information_vision": String,
        "company_information_portfolio": String,
        "opportunities_programs_projects": String,
        "opportunities_HR": String,
        "opportunities_amenities": String,
        "opportunities_current_openings": String
   })
);

let addCompany = (data, cb) => {
    var company = new Companies(data);
    company.save((err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let getAllCompanies = (cb) => {
    Companies.find({}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getCompanyById = (id, cb) => {
    Companies.findOne({_id: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let updateCompanyById = (id, data, cb) => {
    Companies.updateOne({_id: id}, data, (err) => {
        if(err) {
            return cb(err)
        } else {
            return cb(null);
        }
    });
};

let deleteCompanyById = (id, cb) => {
    Companies.deleteOne({_id: id}, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

let getCompanyByTag = (tags, cb) => {
    Companies.find({"company_information_tags": {$in: tags}}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let getCompanyByUserId = (id, cb) => {
    Companies.findOne({userId: id}, (err, data) => {
        if(err) {
            return cb(err, null);
        } else {
            return cb(null, data);
        }
    });
};

let deleteCompanyByUserId = (id, cb) => {
    Companies.deleteOne({userId: id}, (err) => {
        if(err) {
            return cb(err);
        } else {
            return cb(null);
        }
    });
};

module.exports = {
    addCompany,
    getAllCompanies,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getCompanyByTag,
    getCompanyByUserId,
    deleteCompanyByUserId
}