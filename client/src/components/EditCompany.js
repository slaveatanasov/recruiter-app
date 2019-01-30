import React from 'react';
import axios from 'axios';

export class EditCompany extends React.Component {
    state = {
        company: ""
    }

    componentDidMount() {
		const { id } = this.props.match.params;
		axios.get(`http://127.0.0.1:5000/companies/user/${id}`)
        .then((company) => {
		this.setState(() => ({ ...this.state, company: company.data}))
      })
    }
      
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value } )

    submitForm = (e) => {
		let company = this.state;
		const id = this.state.company._id;
		axios.put(`http://127.0.0.1:5000/companies/${id}`, company)
		.then(res => this.props.history.push('/dashboard'))
		.catch(err => console.log(err.response.data))	
    }
    
    render() {
        return (
            <div className="company-details-form">
                <div className="company-icon-div">
                    <img src={require("../assets/images/company-logo.png")} className="company-icon" alt="" />
                </div>
                    <h1>Edit company details</h1>
                    <br />
                <form>
                    <h3 className="company-form-section">General info</h3>
                    <br />
                    <p>Company name</p>
                    <input type="text" name="company_name" defaultValue={this.state.company.company_name} onChange={this.handleChange} />
                    <p>Year established</p>
                    <input type="date" name="established" onChange={this.handleChange} />
                    <p>Email</p>
                    <input type="email" name="email" defaultValue={this.state.company.email} onChange={this.handleChange} />
                    <p>Website</p>
                    <input type="text" name="website" defaultValue={this.state.company.website} onChange={this.handleChange} />
                    <p>Telephone number</p>
                    <input type="text" name="phone" defaultValue={this.state.company.phone} onChange={this.handleChange} />
                    <br />
                    <h3 className="company-form-section">Location</h3>
                    <br />
                    <p>Country</p>
                    <input type="text" name="location_country" defaultValue={this.state.company.location_country} onChange={this.handleChange} />
                    <p>City</p>
                    <input type="text" name="location_city" defaultValue={this.state.company.location_city} onChange={this.handleChange} />
                    <p>ZIP Code</p>
                    <input type="text" name="location_zip_code" defaultValue={this.state.company.location_city} onChange={this.handleChange} />
                    <p>Address</p>
                    <input type="text" name="location_address" defaultValue={this.state.company.location_address} onChange={this.handleChange} />
                    <br />
                    <h3 className="company-form-section">Company information</h3>
                    <br />
                    <p>Industry</p>
                    <input type="text" name="company_information_industry" defaultValue={this.state.company.company_information_industry} onChange={this.handleChange} />
                    <p>Scope of work</p>
                    <input type="text" name="company_information_scope_of_work" defaultValue={this.state.company.company_information_scope_of_work} onChange={this.handleChange} />
                    <p>Tags</p>
                    <input type="text" name="company_information_tags" defaultValue={this.state.company.company_information_tags} onChange={this.handleChange} />
                    <p>Number of employees</p>
                    <input type="text" name="company_information_no_of_employees" defaultValue={this.state.company.company_information_no_of_employees} onChange={this.handleChange} />
                    <p>Expected number of hires</p>
                    <input type="text" name="company_information_expected_hires_per_year" defaultValue={this.state.company.company_information_expected_hires_per_year} onChange={this.handleChange} />
                    <p>Company vision</p>
                    <input type="text" name="company_information_vision" defaultValue={this.state.company.company_information_vision} onChange={this.handleChange} />
                    <p>Portfolio</p>
                    <input type="text" name="company_information_portfolio" defaultValue={this.state.company.company_information_portfolio} onChange={this.handleChange} />
                    <br />
                    <h3 className="company-form-section">Opportunities</h3>
                    <br />
                    <p>Programs and projects</p>
                    <input type="text" name="opportunities_programs_projects" defaultValue={this.state.company.opportunities_programs_projects} onChange={this.handleChange} />
                    <p>HR</p>
                    <input type="text" name="opportunities_HR" defaultValue={this.state.company.opportunities_HR} onChange={this.handleChange} />
                    <p>Amenities</p>
                    <input type="text" name="opportunities_amenities" defaultValue={this.state.company.opportunities_amenities} onChange={this.handleChange} />
                    <p>Current openings</p>
                    <input type="text" name="opportunities_current_openings" defaultValue={this.state.company.opportunities_current_openings} onChange={this.handleChange} />
                    <br />
                    <button type="button" onClick={this.submitForm} className="button-create">Save changes</button>
                </form>
            </div>
        )
    }
}
