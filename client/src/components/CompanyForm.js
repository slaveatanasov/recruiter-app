import React from 'react';
import axios from 'axios';

export class CompanyForm extends React.Component {
    constructor() {
        super();
        this.state = {
            company_name: "",
            established: "",
            email: "",
            website: "",
            phone: "",
            location_country: "",
            location_city: "",
            location_zip_code: "",
            location_address: "",
            company_information_industry: "",
            company_information_scope_of_work: "",
            company_information_no_of_employees: "",
            company_information_tags: "",
            company_information_expected_hires_per_year: "",
            company_information_vision: "",
            company_information_portfolio: "",
            opportunities_programs_projects: "",
            opportunities_HR: "",
            opportunities_amenities: "",
            opportunities_current_openings: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitForm = (e) => {
        let company = {...this.state}
        company.location_zip_code = parseInt(company.location_zip_code);
        company.company_information_no_of_employees = parseInt(company.company_information_no_of_employees);
        company.company_information_expected_hires_per_year = parseInt(company.company_information_expected_hires_per_year);
		axios.post('http://127.0.0.1:80/companies', company)
        .then(res => this.props.history.push('/dashboard'))
        .catch(err => console.log(err.response.data));
    }

    render() {
        return (
            <div className="company-details-form">
                <div className="company-icon-div">
                    <img src={require("../assets/images/company-logo.png")} className="company-icon" alt="" />
                </div>
                    <h1>Enter company details</h1>
                    <br />
                <form>
                    <h3 className="company-form-section">General info</h3>
                    <br />
                    <p>Company name</p>
                    <input type="text" onChange={this.handleChange} name="company_name" />
                    <p>Year established</p>
                    <input type="date" onChange={this.handleChange} name="established" />
                    <p>Email</p>
                    <input type="email" onChange={this.handleChange} name="email" />
                    <p>Website</p>
                    <input type="text" onChange={this.handleChange} name="website" />
                    <p>Telephone number</p>
                    <input type="text" onChange={this.handleChange} name="phone" />
                    <br />
                    <h3 className="company-form-section">Location</h3>
                    <br />
                    <p>Country</p>
                    <input type="text" onChange={this.handleChange} name="location_country" />
                    <p>City</p>
                    <input type="text" onChange={this.handleChange} name="location_city" />
                    <p>ZIP Code</p>
                    <input type="text" onChange={this.handleChange} name="location_zip_code" />
                    <p>Address</p>
                    <input type="text" onChange={this.handleChange} name="location_address" />
                    <br />
                    <h3 className="company-form-section">Company information</h3>
                    <br />
                    <p>Industry</p>
                    <input type="text" onChange={this.handleChange} name="company_information_industry" />
                    <p>Scope of work</p>
                    <input type="text" onChange={this.handleChange} name="company_information_scope_of_work" />
                    <p>Number of employees</p>
                    <input type="text" onChange={this.handleChange} name="company_information_no_of_employees" />
                    <p>Expected number of hires</p>
                    <input type="text" onChange={this.handleChange} name="company_information_expected_hires_per_year" />
                    <p>Tags</p>
                    <input type="text" onChange={this.handleChange} name="company_information_tags" />
                    <p>Company vision</p>
                    <textarea onChange={this.handleChange} name="company_information_vision" rows="5" cols="20" />
                    <p>Portfolio</p>
                    <textarea onChange={this.handleChange} name="company_information_portfolio" rows="5" cols="20" />
                    <br />
                    <h3 className="company-form-section">Opportunities</h3>
                    <br />
                    <p>Programs and projects</p>
                    <input type="text" onChange={this.handleChange} name="opportunities_programs_projects" />
                    <p>HR</p>
                    <input type="text" onChange={this.handleChange} name="opportunities_HR" />
                    <p>Amenities</p>
                    <input type="text" onChange={this.handleChange} name="opportunities_amenities" />
                    <p>Current openings</p>
                    <input type="text" onChange={this.handleChange} name="opportunities_current_openings" />
                    <br />
                    <button type="button" onClick={this.submitForm} className="button-create">Create company profile</button>
                </form>
            </div>
        )
    }
}
