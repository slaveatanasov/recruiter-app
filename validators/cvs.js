// Commented pairs bring up error during validation.

var cvCreate = {
    first_name: {type: "string", empty: false},
    last_name: {type: "string", empty: false},
    birth_date: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    email: {type: "email", empty: false},
    phone: {type: "string", empty: false},
    location_country: {type: "string", empty: false},
    location_city: {type: "string", empty: false},
    location_zip_code: {type: "number", optional: true},
    location_address: {type: "string", optional: true},
    education_institution: {type: "string", empty: false},
    education_level: {type: "string", empty: false},
    education_degree: {type: "string", empty: false},
    education_start_at: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    education_finish_at: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    experience_position: {type: "string", empty: false},
    experience_job_description: {type: "string", empty: false},
    experience_tags: {  type: "string", empty: false},
    experience_employer: {type: "string", empty: false},
    experience_start_at: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    experience_finish_at: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    skills_languages: {type: "string", empty: false},
    skills_communication_skills: {type: "string", empty: false},
    skills_organizational_skills: {type: "string", empty: false},
    skills_digital_skills: {type: "string", empty: false}
    }

module.exports = {
    cvCreate
}