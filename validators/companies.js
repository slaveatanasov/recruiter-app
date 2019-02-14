var companyCreate = {
    company_name: {type: "string", empty: false},
    established: {type: "string", empty: false, stringPattern: "^([0-9]{4}[-/]?((0[13-9]|1[012])[-/]?(0[1-9]|[12][0-9]|30)|(0[13578]|1[02])[-/]?31|02[-/]?(0[1-9]|1[0-9]|2[0-8]))|([0-9]{2}(([2468][048]|[02468][48])|[13579][26])|([13579][26]|[02468][048]|0[0-9]|1[0-6])00)[-/]?02[-/]?29)$"},
    email: {type: "email", empty: false},
    website: {type: "string", empty: false},
    phone: {type:"string", optional: true},
    location_country: {type: "string", empty: false},
    location_city: {type: "string", empty: false},
    location_zip_code: {type: "number", optional: true},
    location_address: {type: "string", optional: true},
    company_information_industry: {type: "string", empty: false},
    company_information_scope_of_work: {type: "string", empty: false},
    company_information_no_of_employees: {type: "number", optional: true},
    company_information_expected_hires_per_year: {type: "number", optional: true},
    company_information_vision: {type: "string", optional: true},
    company_information_portfolio: {type: "string", optional: true},
    opportunities_programs_projects: {type: "string", empty: false},
    opportunities_HR: {type: "string", optional: true},
    opportunities_amenities: {type: "string", optional: true},
    opportunities_current_openings: {type: "string", optional: true}
    };

module.exports = {
    companyCreate
}